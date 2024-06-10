const Joi = require("joi");
const prisma = require("../prisma/prisma");

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

const registerSchema = Joi.object({
	first_name: Joi.string().required(),
	last_name: Joi.string().required(),
	email: Joi.string()
		.email()
		.required()
		.external(async (email, helpers) => {
			console.log("helpers", helpers.error);
			let isEmailInUse;
			try {
				isEmailInUse = await prisma.users.findUnique({
					where: {
						email,
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
	date_of_birth: Joi.date().format("DD.MM.YYYY").required(),
});

const refreshSchema = Joi.object({
	refresh_token: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
	email: Joi.string().email().required(),
});

module.exports = {
	loginSchema,
	registerSchema,
	refreshSchema,
	resetPasswordSchema,
};
