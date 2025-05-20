// schemas/vehicles.js
const Joi = require('joi');

const { documentsArraySchema } = require('./documentSchemas');

// Insurance file schema
const insuranceFileSchema = Joi.object({
	mimeType: Joi.string(),
	uri: Joi.string().uri(),
	name: Joi.string(),
	size: Joi.number().integer(),
	base64: Joi.string(),
});

// Vehicle information schema
const vehicleInformationSchema = Joi.object({
	license_plate: Joi.string(),
	registration_number: Joi.string(),
	make: Joi.string(),
	model: Joi.string(),
	color: Joi.string(),
	year: Joi.string(),
	class: Joi.string(),
	category: Joi.string(),
	insurance_number: Joi.string().optional(),
	insurance_expiration_date: Joi.date().optional(),
	insurance_file: Joi.array().items(insuranceFileSchema).optional(),
});

// Vehicle schema
const newVehicleSchema = Joi.object({
	data: Joi.object({
		vehicle_information: vehicleInformationSchema,
		documents: documentsArraySchema.required(),
		drivers: Joi.array().items(Joi.string().email()), // Driver emails
	}),
});

module.exports = {
	newVehicleSchema,
};
