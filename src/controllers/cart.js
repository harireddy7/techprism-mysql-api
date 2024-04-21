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

const upsertCart = async (req, res) => {
	try {
		const userId = +req.params.userId;
		const productId = +req.params.productId;
		const { quantity } = req.body || {};

		// Before inserting, check following keys in the insert items
		// check userId, productId, quantity more than 0
		if (
			!userId ||
			userId <= 0 ||
			!productId ||
			productId <= 0 ||
			!quantity ||
			quantity <= 0
		) {
			return res.status(400).json({ code: 400, message: 'Invalid data' });
		}

		const connection = await getConnection();

		// check user exists
		const [[user]] = await connection.query(
			`SELECT * from users WHERE id = ${userId}`
		);
		if (!user)
			return res.status(400).json({ code: 400, message: 'User not found' });

		// check productId exists
		const [[product]] = await connection.query(
			`SELECT * from products WHERE id = ${productId}`
		);
		if (!product)
			return res.status(400).json({ code: 400, message: 'Product not found' });

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

		const { insertId } = data || {};

		res
			.status(201)
			.json({ code: 201, data: { userId, productId, quantity, id: insertId } });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

export const addToCart = upsertCart;

export const updateCart = upsertCart;

export const deleteFromCart = async (req, res) => {
	try {
		const { userId, productId } = req.params || {};
		if (!userId || !productId) {
			return res.status(400).json({ code: 400, message: 'Invalid data' });
		}
		const connection = await getConnection();

		// check for user_id and product_id combos in cart_items

		const [[existingComboItem]] = await connection.query(
			`SELECT * FROM cart_items WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		if (!existingComboItem) {
			return res
				.status(400)
				.json({ code: 400, message: 'data does not exist' });
		}

		const [data] = await connection.query(
			`DELETE FROM cart_items WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		res.status(204).json({ code: 204, data: 'deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};
