const Joi = require("joi").extend(require('@joi/date'));

const { newBusinessSchema } = require("./businessSchemas");
const { addressSchema } = require("./addressSchemas");
const { newDriverSchema } = require("./driverSchemas");
const { newVehicleSchema } = require("./vehicleSchemas");

const registerTaxiBusinessSchema = Joi.object({
	business: newBusinessSchema,
	addresses: Joi.object({
		business: addressSchema.required(),
	}),
	drivers: Joi.array().items(newDriverSchema),
	vehicles: Joi.array().items(newVehicleSchema)
});

module.exports = { registerTaxiBusinessSchema };