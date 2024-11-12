const Joi = require("joi").extend(require('@joi/date'));

const prisma = require("../prisma/prisma");

const loginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

const registerSchema = Joi.object({
	user_role: Joi.string(),
	first_name: Joi.string().required(),
	last_name: Joi.string().required(),
	email: Joi.string()
		.email()
		.optional()
		.external(async (email, helpers) => {
			console.log("helpers", helpers.error);
			let isEmailInUse;
			try {
				isEmailInUse = await prisma.users.findUnique({
					where: {
						email: email.toLowerCase(),
					},
				});
				console.log(isEmailInUse)
			} catch (error) {
				console.log(error)
			}
		
			if (isEmailInUse) {
				throw new Error("Account with this email already exists.");
			}

			return email;
		}),
	password: Joi.string()
		.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
		.required(),
	confirm_password: Joi.ref("password"),
	telephone: Joi.string()
		.required()
		.external(async (telephone, helpers) => {
			let isPhoneNumberInUse;
			try {
				isPhoneNumberInUse = await prisma.users.findUnique({
					where: {
						telephone,
					},
				});
				console.log(isPhoneNumberInUse)
			} catch (error) {
				console.log(error)
			}
		
			if (isPhoneNumberInUse) {
				throw new Error("Account with this phone number already exists.");
			}

			return telephone;
		}),
	telephone_code: Joi.string().required(),
	telephone_number: Joi.string().required(),
	date_of_birth: Joi.date().format("YYYY-MM-DD").required(),
});

const registerChildSchema = Joi.object({
	user_data: registerSchema.required(), // Require the register schema
	parent_uid: Joi.string().required(),    // New required string field
});

const refreshSchema = Joi.object({
	refresh_token: Joi.string().required(),
});

const resetPasswordRequestSchema = Joi.object({
	email: Joi.string().email().required(),
});

const resetPasswordSchema = Joi.object({
	password: Joi.string()
		.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
		.required(),
	confirm_password: Joi.ref("password"),
});

module.exports = {
	loginSchema,
	registerSchema,
	refreshSchema,
	resetPasswordSchema,
	resetPasswordRequestSchema,
	registerChildSchema
	
};
