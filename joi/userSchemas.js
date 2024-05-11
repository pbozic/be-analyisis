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
			const isEmailInUse = await prisma.users.findUnique({
				where: {
					email,
				},
			});
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
			const isPhoneNumberInUse = await prisma.users.findUnique({
				where: {
					telephone,
				},
			});
			if (isPhoneNumberInUse) {
				throw new Error(
					"Account with this phone number already exists.",
				);
			}

			return telephone;
		}),
});

const refreshSchema = Joi.object({
	refresh_token: Joi.string().required(),
});

const updateSchema = Joi.object({
	user_id: Joi.number().required(),
	profile_picture: Joi.string().base64(),
	first_name: Joi.string(),
	last_name: Joi.string(),
	email: Joi.string().email(),
	telephone: Joi.string(),
	user_role: Joi.string(),
	addresses: Joi.array().items(
		Joi.object({
			address_id: Joi.string(),
			address: Joi.string(),
			latitude: Joi.string(),
			longitude: Joi.string(),
			name: Joi.string(),
			icon: Joi.string(),
			street: Joi.string(),
			city: Joi.string(),
			house_number: Joi.string(),
			postal: Joi.string(),
			country: Joi.string(),
		}),
	),
});

module.exports = {
	loginSchema,
	registerSchema,
	refreshSchema,
	updateSchema,
};
