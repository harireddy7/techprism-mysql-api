import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DB_NAME } = process.env;

// create a connection pool with mysql db running on a specfic domain
const connectionOptions = {
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_DB_NAME,
};

const pool = mysql.createPool(connectionOptions);

const getConnection = async () => {
	try {
		const connection = await pool.getConnection();
		// console.log(`connectionId:: ${connection.threadId}`)

		return connection;
	} catch (err) {
		console.log(err);
	}
};

export default getConnection;
