const Joi = require('joi');

const { TAXI_REQUIREMENTS, TRANSFER_REQUIREMENTS, WORKING_HOURS } = require("../lib/schemaConstants");
const { registerSchema } = require("./authSchemas");
const { documentsArraySchema } = require("./documentSchemas");
const { addressSchema } = require("./addressSchemas");

const newDriverSchema = Joi.object({
	user: Joi.object({
		data: registerSchema.required(),
		documents: documentsArraySchema.required(),
		addresses: Joi.array().items(addressSchema).required()
	}).required(),
	driver: Joi.object({
		data: Joi.object({
			working_hours: Joi.object(
				Object.keys(WORKING_HOURS).reduce((acc, key) => {
					acc[key] = Joi.array().items(Joi.array().items(Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/).required())).optional();
					return acc;
				}, {})
			).required(),
			ride_requirements: Joi.object(
				Object.keys(TAXI_REQUIREMENTS).reduce((acc, key) => {
					acc[key] = Joi.boolean().required();
					return acc;
				}, {})
			).required(),
			transfer_requirements: Joi.object(
				Object.keys(TRANSFER_REQUIREMENTS).reduce((acc, key) => {
					acc[key] = Joi.boolean().required();
					return acc;
				}, {})
			).required(),
			regions: Joi.array().items(Joi.string()).required(),
			handles_taxi_orders: Joi.boolean().required(),
			handles_transfer_orders: Joi.boolean().required(),
			handles_delivery_orders: Joi.boolean().required(),
			taxi_orders_toggled: Joi.boolean().required(),
			transfer_orders_toggled: Joi.boolean().required(),
			delivery_orders_toggled: Joi.boolean().required()
		}).required(),
		documents: documentsArraySchema.required()
	}).required()
});

module.exports = { newDriverSchema };
