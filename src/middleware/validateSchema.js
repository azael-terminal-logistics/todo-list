import boom from '@hapi/boom';


export function validateSchema(schema) {
	return async (req, res, next) => {
		try {
		  await schema.validateAsync(req.body);
		  next();
		} catch (error) {
			const {
				output: { statusCode, payload },
			} = boom.badData(error);
			res.status(statusCode).json(payload);
		}
	};
}