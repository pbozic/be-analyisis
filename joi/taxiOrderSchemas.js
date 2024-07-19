const Joi = require("joi");
const addressSchema = Joi.object({
	address: Joi.string().required(),
	coordinates: Joi.object({
		latitude: Joi.number().required(),
		longitude: Joi.number().required(),
	}).required(),
});
const createOrderSchema = Joi.object({
	preferences: Joi.object().unknown().required(),
	route: Joi.array().items(addressSchema).required(),
	pickup_location: addressSchema,
	delivery_location: addressSchema,
	estimates: Joi.object(),
	payment: Joi.object(),
	telephone: Joi.string(),
	user: Joi.object(),
});

module.exports = {
    createOrderSchema,
};
