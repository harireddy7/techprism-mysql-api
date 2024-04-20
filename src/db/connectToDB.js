import mysql from 'mysql2/promise';

// create a connection pool with mysql db running on a specfic domain
let pool = {};

export const createDbConnection = async () => {
	const { DB_HOST, DB_USER, DB_PASSWORD, DB_DB_NAME } = process.env;
	const connectionOptions = {
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_DB_NAME,
	};
	pool = mysql.createPool(connectionOptions);
	return pool;
};

export const getConnection = async () => {
	try {
		const connection = await pool.getConnection();
		return connection;
	} catch (err) {
		console.log(err);
	}
};
