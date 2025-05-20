import { z } from 'zod';

export const VehiclesScalarFieldEnumSchema = z.enum([
	'vehicle_id',
	'business_id',
	'active',
	'class',
	'category',
	'make',
	'model',
	'color',
	'license_plate',
	'created_at',
	'updated_at',
	'delivery_driver_id',
	'vehicle_specification_id',
]);

export default VehiclesScalarFieldEnumSchema;
