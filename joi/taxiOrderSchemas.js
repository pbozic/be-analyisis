import Joi from 'joi';
const addressSchema = Joi.object({
	id: Joi.string().optional(),
	address: Joi.string().required(),
	coordinates: Joi.object({
		latitude: Joi.number().required(),
		longitude: Joi.number().required(),
	}).required(),
	locked: Joi.boolean().optional(),
});
const deliveryLocationSchema = Joi.object({
	id: Joi.string().optional(),
	address: Joi.string().allow(null),
	coordinates: Joi.object({
		latitude: Joi.number().allow(null),
		longitude: Joi.number().allow(null),
	}).allow(null),
	locked: Joi.boolean().optional(),
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
	business_user: Joi.object().allow(null).optional(),
	business_client: Joi.object().allow(null).optional(),
	driver: Joi.any().allow(null).optional(),
	customer_note: Joi.string().allow(null).optional(),
	parent_user_type: Joi.string().allow(null).optional(),
	creating_user_id: Joi.string().allow(null).optional(),
	vehicle_transfer_order: Joi.object().allow(null).optional(),
	allow_credits_usage: Joi.boolean().optional(),
});
export { createOrderSchema };
export default {
	createOrderSchema,
};
