import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
	DB: {
		MYSQL_HOST: process.env.MYSQL_HOST,
		MYSQL_PORT: process.env.MYSQL_PORT,
		MYSQL_USER: process.env.MYSQL_USER,
		MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
		MYSQL_DATABASE: process.env.MYSQL_DATABASE,
	},
	JWT:{
		JWT_KEY: process.env.JWT_KEY,
	},
	SERVER: {
		APP_PORT: process.env.APP_PORT
	}
};
