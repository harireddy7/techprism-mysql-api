import { getConnection } from '../db/connectToDB';

export const getReviewsByProductId = async (req, res) => {
	try {
		const productId = req.params.productId;
		if (!productId) {
			throw new Error('Invalid data');
		}
		const connection = await getConnection();
		const [data] = await connection.query(
			`SELECT r.user_id, r.product_id, u.username, r.comment, r.rating FROM reviews r JOIN users u ON r.user_id = u.id WHERE product_id = ${productId}`
		);
		res.status(200).json({ code: 200, data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

const upsertReview = async (req, res) => {
	try {
		const { comment, rating } = req.body || {};
		const productId = +req.params.productId;
		const userId = +req.params.userId;
		if (
			!userId ||
			userId <= 0 ||
			!productId ||
			productId <= 0 ||
			!comment ||
			!rating ||
			rating <= 0 ||
			rating > 5
		) {
			throw new Error('Invalid data!');
		}

		const connection = await getConnection();

		const [[existingComboItem]] = await connection.query(
			`SELECT * FROM reviews WHERE user_id = ${userId} AND product_id = ${productId}`
		);

		let query = `INSERT INTO reviews (user_id, product_id, comment, rating) VALUES(${userId}, ${productId}, '${comment}', ${rating})`;

		if (existingComboItem) {
			query = `UPDATE reviews SET comment = '${comment}', rating = ${rating} WHERE user_id = ${userId} AND product_id = ${productId}`;
		}

		const [data] = await connection.query(query);

		const { insertId } = data || {};

		res.status(201).json({
			code: 201,
			data: { userId, productId, comment, rating, id: insertId },
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

export const createReview = upsertReview;

export const updateReview = upsertReview;

export const deleteReview = async (req, res) => {
	try {
		const productId = req.params.productId;
		const userId = req.params.userId;

		if (!userId || !productId) {
			throw new Error('Invalid data');
		}
		const connection = await getConnection();

		// check for user_id and product_id combos in reviews
		const [[existingComboItem]] = await connection.query(
			`SELECT * FROM reviews WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		if (!existingComboItem) {
			throw new Error('data does not exist');
		}

		const [data] = await connection.query(
			`DELETE FROM reviews WHERE user_id = ${userId} AND product_id = ${productId}`
		);
		console.log(data);
		res.status(204).json({ code: 204, data: 'deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};
