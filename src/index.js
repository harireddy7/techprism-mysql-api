import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { createDbConnection } from './db/connectToDB';
import apiRouter from './routes/api';

config();

const { API_VERSION, PORT } = process.env;

const COLORS = {
	RESET: '\x1b[0m',
	BOLD: '\x1b[1m',
	RED: '\x1b[31m',
};

const app = express();

app.use(
	cors({
		origin: '*',
	})
);

app.use(`/api/${API_VERSION}`, apiRouter);

app.use(`/api/${API_VERSION}`, (_, res) => {
	res.status(200).send('I am Alive bro!!');
});

/* ******** CONNECT TO DB AND SPIN UP APIs ******** */

createDbConnection()
	.then(() => {
		console.log(COLORS.BOLD, '\nConnected to database ✅', COLORS.RESET);

		app.listen(PORT, () => {
			console.log(
				COLORS.BOLD,
				`\nAPIs are up and running on port ${PORT} ✅\n`,
				COLORS.RESET
			);
		});
	})
	.catch((err) => {
		console.log(
			COLORS.RED,
			`Error occured while creating db connection`,
			COLORS.RESET
		);
		console.error(err);
	});
