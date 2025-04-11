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
	subtype: Joi.string().optional(),
	preferences: Joi.object().unknown().required(),
	cargo_preferences: Joi.optional(),
	route: Joi.array().items(addressSchema).min(1).required(),
	pickup_location: addressSchema,
	delivery_location: deliveryLocationSchema.optional(),
	estimates: Joi.object(),
	payment: Joi.object(),
	telephone: Joi.string(),
	first_name: Joi.string(),
	last_name: Joi.string(),
	user: Joi.object(),
	user_id: Joi.string().allow(null).optional(),
	driver: Joi.any().allow(null).optional(),
	customer_note: Joi.string().allow(null).optional(),
	parent_user_type: Joi.string().allow(null).optional(),
	creating_user_id: Joi.string().allow(null).optional(),
	vehicle_transfer_order: Joi.object().allow(null).optional(),
	allow_credits_usage: Joi.boolean().required()
});

module.exports = {
    createOrderSchema,
};
