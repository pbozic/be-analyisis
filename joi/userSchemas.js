const Joi = require("joi");

const updateSchema = Joi.object({
	user_id: Joi.string(),
	profile_picture: [Joi.string().base64().optional(), Joi.allow(null)],
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
const verifyPhoneSchema = Joi.object({
	token: Joi.string().required(),
});

const updateEmailSchema = Joi.object({
	email: Joi.string().required(),
});

const updatePasswordSchema = Joi.object({
	password: Joi.string().required(),
	new_password: Joi.string()
		.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
		.required(),
	confirm_password: Joi.ref("new_password"),
});

const updateTelephoneSchema = Joi.object({
	telephone: Joi.string().required(),
});
const addAddressSchema = Joi.object({
	address: Joi.string().required(),
	latitude: Joi.string().required(),
	longitude: Joi.string().required(),
	name: Joi.string().optional(),
	icon: Joi.string().optional(),
	street: Joi.string().optional(),
	city: Joi.string().optional(),
	house_number: Joi.string().optional(),
	postal: Joi.string().optional(),
	country: Joi.string().optional(),
});

const editAddressSchema = Joi.object({
	name: Joi.string().optional(),
	icon: Joi.string().optional(),
	primary: Joi.boolean().optional(),
});
module.exports = {
	updateSchema,
	verifyPhoneSchema,
	updateEmailSchema,
	updatePasswordSchema,
	updateTelephoneSchema,
	addAddressSchema,
	editAddressSchema,
};
