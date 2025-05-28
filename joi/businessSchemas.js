import Joi from 'joi';

import prisma from '../prisma/prisma.js';
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
		})
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
	confirm_password: Joi.ref('new_password'),
});
const updateTelephoneSchema = Joi.object({
	telephone: Joi.string().required(),
	telephone_code: Joi.string().required(),
	telephone_number: Joi.string().required(),
});
const addAddressSchema = Joi.object({
	address: Joi.string().required(),
	latitude: Joi.string().required(),
	longitude: Joi.string().required(),
	name: [Joi.string().optional(), Joi.allow(null)],
	icon: [Joi.string().optional(), Joi.allow(null)],
	street: [Joi.string().optional(), Joi.allow(null)],
	city: [Joi.string().optional(), Joi.allow(null)],
	house_number: [Joi.string().optional(), Joi.allow(null)],
	postal: [Joi.string().optional(), Joi.allow(null)],
	country: [Joi.string().optional(), Joi.allow(null)],
});
const editAddressSchema = Joi.object({
	name: Joi.string().optional(),
	icon: Joi.string().optional(),
	primary: Joi.boolean().optional(),
});
const paymentIntentSchema = Joi.object({
	amount: Joi.number().required(),
	payment_method: Joi.string().required(),
	user_id: Joi.string().required(),
});
const newBusinessSchema = Joi.object({
	type: Joi.string(),
	is_business_unit: Joi.boolean(),
	name: Joi.string(),
	description: Joi.string().allow('', null).optional(),
	tax_id: Joi.string(),
	registration_id: Joi.string(),
	email: Joi.string()
		.email()
		.optional()
		.external(async (email, helpers) => {
			console.log('helpers', helpers.error);
			let isEmailInUse;
			try {
				isEmailInUse = await prisma.business.findFirst({
					where: {
						email: email.toLowerCase(),
					},
				});
				console.log(isEmailInUse);
			} catch (error) {
				console.log(error);
			}
			if (isEmailInUse) {
				throw new Error('Account with this email already exists.');
			}
			return email;
		}),
	telephone: Joi.string(),
	telephone_code: Joi.string(),
	telephone_number: Joi.string(),
	website_url: Joi.string().allow('', null).optional(),
	minimum_order: Joi.number().integer().optional(),
});
export { updateSchema };
export { verifyPhoneSchema };
export { updateEmailSchema };
export { updatePasswordSchema };
export { updateTelephoneSchema };
export { addAddressSchema };
export { paymentIntentSchema };
export { editAddressSchema };
export { newBusinessSchema };
export default {
	updateSchema,
	verifyPhoneSchema,
	updateEmailSchema,
	updatePasswordSchema,
	updateTelephoneSchema,
	addAddressSchema,
	paymentIntentSchema,
	editAddressSchema,
	newBusinessSchema,
};
