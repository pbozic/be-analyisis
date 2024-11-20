const Joi = require("joi");
const addressSchema = Joi.object({
	address: Joi.string().required(),
	coordinates: Joi.object({
		latitude: Joi.number().required(),
		longitude: Joi.number().required(),
	}).required(),
});

const deliveryLocationSchema = Joi.object({
	address: Joi.string().allow(null),
	coordinates: Joi.object({
		latitude: Joi.number().allow(null),
		longitude: Joi.number().allow(null),
	}).allow(null)
}).allow(null);

const createOrderSchema = Joi.object({
	type: Joi.string().optional(),
	preferences: Joi.object().unknown().required(),
	cargo_preferences: Joi.optional(),
	route: Joi.array().items(addressSchema).min(1).required(),
	pickup_location: addressSchema,
	delivery_location: deliveryLocationSchema.optional(),
	estimates: Joi.object(),
	payment: Joi.object(),
	telephone: Joi.string(),
	user: Joi.object(),
	user_id: Joi.string().allow(null).optional(),
	driver: Joi.any().allow(null).optional(),
	customer_note: Joi.string().allow(null).optional(),
	parent_user_type: Joi.string().allow(null).optional(),
});

module.exports = {
    createOrderSchema,
};
