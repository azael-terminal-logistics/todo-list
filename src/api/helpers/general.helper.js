import boom from '@hapi/boom';
import {CONFIG} from '../../config'
import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer';
import path from 'path'

export function unauthorized(req, res) {
	const {
		output: { statusCode, payload },
	} = boom.unauthorized('Invalid email or password');

	return res.status(statusCode).json(payload);
}

export function unauthorizedTkn(req, res) {
	const {
		output: { statusCode, payload },
	} = boom.unauthorized();

	return res.status(statusCode).json(payload);
}

export async function sendEmail(module,template,subject,to,context={},cc=null,bcc=null){
	const transporter = nodemailer.createTransport({
		host: CONFIG.EMAIL.MAIL_HOST,
		port: CONFIG.EMAIL.MAIL_PORT,
		auth: {
			user: CONFIG.EMAIL.MAIL_USERNAME, 
			pass: CONFIG.EMAIL.MAIL_PASSWORD, 
		},
	});
	transporter.use('compile',hbs({
		viewEngine:'nodemailer-express-handlebars', 
		viewPath:path.join('src/api/'+module+'/email')
	}));
	const mailOptions = {
		from : CONFIG.EMAIL.MAIL_FROM_ADDRESS,
		to: to,
		subject : subject,
		template : template,
		context : context
	}

	return await transporter.sendMail(mailOptions);
}