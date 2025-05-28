import joi from 'joi';
import date from '@joi/date';

import { newBusinessSchema } from './businessSchemas.js';
import { addressSchema } from './addressSchemas.js';
import { newDriverSchema } from './driverSchemas.js';
import { newVehicleSchema } from './vehicleSchemas.js';
const Joi = joi.extend(date);
const registerTaxiBusinessSchema = Joi.object({
	business: newBusinessSchema,
	addresses: Joi.object({
		business: addressSchema.required(),
	}),
	drivers: Joi.array().items(newDriverSchema),
	vehicles: Joi.array().items(newVehicleSchema),
});
export { registerTaxiBusinessSchema };
export default {
	registerTaxiBusinessSchema,
};
