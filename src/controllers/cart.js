import { getConnection } from '../db/connectToDB';

export const getCartByUserId = async (req, res) => {
	try {
		const userId = req.params.userId;
		if (!userId) {
			throw new Error('Invalid data');
		}

		const connection = await getConnection();
		const [data] = await connection.query(
			`SELECT ci.user_id, ci.product_id, p.name, p.price, ci.quantity FROM cart_items ci JOIN products p ON ci.product_id = p.id WHERE user_id = ${userId}`
		);
		res.status(200).json({ code: 200, data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

export const upsertCart = async (insertItem) => {
	try {
		const { userId, productId, quantity } = insertItem || {};
		// Before inserting, check following keys in the insert items
		// cart_item --> userId, productId, quantity
		// check userId, productId, quantity more than 0
		if (
			!userId ||
			userId <= 0 ||
			!productId ||
			productId <= 0 ||
			!quantity ||
			quantity <= 0
		) {
			throw new Error('Invalid data, please check and try again!');
		}

		const connection = await getConnection();

		// check user exists
		const [[user]] = await connection.query(
			`SELECT * from users WHERE id = ${userId}`
		);
		if (!user) throw new Error('User not found!');

		// check productId exists
		const [[product]] = await connection.query(
			`SELECT * from products WHERE id = ${productId}`
		);
		if (!product) throw new Error('Product not found!');

		// if product is already added to cart for this user, update quantity
		// else insert item to cart
		const [[existingComboItem]] = await connection.query(
			`SELECT * FROM cart_items WHERE user_id = ${userId} AND product_id = ${productId}`
		);

		let query = `INSERT INTO cart_items (user_id, product_id, quantity) VALUES(${userId}, ${productId}, ${quantity})`;
		if (existingComboItem) {
			// update
			query = `UPDATE cart_items SET quantity = ${
				existingComboItem.quantity + quantity
			} WHERE user_id = ${userId} AND product_id = ${productId}`;
		}

		const [data] = await connection.query(query);

		res.status(201).json({ code: 201, data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

export const deleteFromCart = async ({ userId, productId } = {}) => {
	try {
		if (!userId || !productId) {
			throw new Error('Invalid data');
		}
		const connection = await getConnection();

		// check for user_id and product_id combos in cart_items

		const [[existingComboItem]] = await connection.query(
			`SELECT * FROM cart_items WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		if (!existingComboItem) {
			throw new Error('data does not exist');
		}

		const [data] = await connection.query(
			`DELETE FROM cart_items WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		console.log(data);
		res.status(204).json({ code: 204, data: 'deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};
