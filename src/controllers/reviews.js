import getConnection from '../db/connectToDB';

export const getReviewsByProduct = async ({ productId } = {}) => {
	try {
		if (!productId) {
			throw new Error('Invalid data');
		}
		const connection = await getConnection();
		const [data] = await connection.query(
			`SELECT r.user_id, r.product_id, u.username, r.comment, r.rating FROM reviews r JOIN users u ON r.user_id = u.id WHERE product_id = ${productId}`
		);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

// getReviewsByProduct({ productId: 10 })

export const upsertReview = async ({
	userId,
	productId,
	comment,
	rating,
} = {}) => {
	try {
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

		console.log(existingComboItem);

		let query = `INSERT INTO reviews (user_id, product_id, comment, rating) VALUES(${userId}, ${productId}, '${comment}', ${rating})`;

		if (existingComboItem) {
			query = `UPDATE reviews SET comment = '${comment}', rating = ${rating} WHERE user_id = ${userId} AND product_id = ${productId}`;
		}

		const [data] = await connection.query(query);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

// upsertReview({
// 	userId: 2,
// 	productId: 1,
// 	comment: 'review for product 1 by user 2',
// 	rating: 4.5,
// });

export const deleteReview = async ({ userId, productId } = {}) => {
	try {
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
	} catch (err) {
		console.log(err);
	}
};

// deleteReview({	userId: 2, productId: 1 });
