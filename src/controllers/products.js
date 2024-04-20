import { getConnection } from '../db/connectToDB';

export const getProducts = async (req, res) => {
	try {
		const connection = await getConnection();
		const [products] = await connection.query('SELECT * FROM products');
		connection.release();
		res.status(200).json({ code: 200, data: products });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};

export const getProductById = async (req, res) => {
	try {
		const productId = req.params.productId;
		const connection = await getConnection();
		const [data] = await connection.query(
			`SELECT * FROM products WHERE id = ${productId}`
		);
		connection.release();
		res.status(200).json({ code: 200, data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ code: 500, message: err?.toString() });
	}
};
