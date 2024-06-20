import boom from '@hapi/boom';

export function logErrors(err, req, res, next) {
	console.log(err);
	next(err);
}

export function wrapErrors(err, req, res, next) {
	if (!err.isBoom) {
		next(boom.badImplementation(err));
	}

	next(err);
}

export function errorHandler(err, req, res, next) {
	const {
		output: { statusCode, payload },
	} = err;
	res.status(statusCode).json({ ...payload });
}
