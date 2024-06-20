import Joi from 'joi'
export const newTaskSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required(),
	status: Joi.string().required(),
});

export const updateTaskSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required(),
	status: Joi.string().required(),
});