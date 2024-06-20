import jwt from 'jsonwebtoken';
import boom from '@hapi/boom';

import { CONFIG } from '../config';

export const tokenValidation = (req, res, next) => {
	let token = req.get('authorization');
	if (token) {
		// Remove Bearer from string
		token = token.slice(7);
		jwt.verify(token, CONFIG.JWT.JWT_KEY, (err, decoded) => {
			if (err) {
				const {
					output: { statusCode, payload },
				} = boom.unauthorized();
			
				return res.status(statusCode).json(payload);
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		const {
			output: { statusCode, payload },
		} = boom.unauthorized();
	
		return res.status(statusCode).json(payload);
	}
};
