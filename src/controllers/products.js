import getConnection from '../db/connectToDB'

export const getProducts = async () => {
	try {
		const connection = await getConnection();
		const [products] = await connection.query('SELECT * FROM products');
		console.log(products);
		connection.release();
	} catch (err) {
		console.log('error');
	}
};

export const getProductById = async (id) => {
	const connection = await getConnection();
	const [data] = await connection.query(
		`SELECT * FROM products WHERE id = ${id}`
	);
	console.log(data);
	connection.release();
};

