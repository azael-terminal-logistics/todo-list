import Joi from 'joi'
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);

export const createUserSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	password: joiPassword
	.string()
	.minOfSpecialCharacters(1)
	.minOfLowercase(2)
	.minOfUppercase(2)
	.minOfNumeric(2)
	.noWhiteSpaces()
	.messages({
			'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
			'password.minOfSpecialCharacters':
				'{#label} should contain at least {#min} special character',
			'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
			'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
			'password.noWhiteSpaces': '{#label} should not contain white spaces',
	}),
	email: Joi.string()
	.email({ tlds: false }).required(),
	password_confirmation: Joi.any().valid(Joi.ref('password')).required().error(new Error('password_confirmation have to be equal than password'))
});

export const updateUserSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required()
});

export const loginUserSchema = Joi.object({
	email: Joi.string()
	.email({ tlds: false }).required(),
	password: Joi.string().required()
});

export const forgotPasswordSchema = Joi.object({
	email: Joi.string()
	.email({ tlds: false }).required()
})

export const recoverPasswordSchema = Joi.object({
	token: Joi.string().required(),
	password: joiPassword
	.string()
	.minOfSpecialCharacters(1)
	.minOfLowercase(2)
	.minOfUppercase(2)
	.minOfNumeric(2)
	.noWhiteSpaces()
	.messages({
			'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
			'password.minOfSpecialCharacters':
				'{#label} should contain at least {#min} special character',
			'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
			'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
			'password.noWhiteSpaces': '{#label} should not contain white spaces',
	}),
	password_confirmation: Joi.any().valid(Joi.ref('password')).required()
})
