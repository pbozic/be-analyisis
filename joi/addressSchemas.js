const Joi = require("joi");
const addressSchema = Joi.object({
	address: Joi.string().required(),
	latitude: Joi.string().regex(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/).required(),
	longitude: Joi.string().regex(/^[-+]?((1[0-7]\d(\.\d+)?|18[0-3](\.\d+)?|\d{1,2}(\.\d+)?))/).required()
});

module.exports = {
	addressSchema
};