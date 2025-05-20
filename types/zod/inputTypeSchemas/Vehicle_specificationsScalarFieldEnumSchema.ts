import { z } from 'zod';

export const Vehicle_specificationsScalarFieldEnumSchema = z.enum([
	'vehicle_specification_id',
	'class',
	'category',
	'people',
	'start_cost',
	'per_kilometre',
	'per_minute',
	'vehicle_id',
]);

export default Vehicle_specificationsScalarFieldEnumSchema;
