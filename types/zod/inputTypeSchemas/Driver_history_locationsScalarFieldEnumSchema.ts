import { z } from 'zod';

export const Driver_history_locationsScalarFieldEnumSchema = z.enum([
	'driver_history_location_id',
	'driver_id',
	'taxi_order_id',
	'delivery_order_id',
	'status',
	'location',
	'created_at',
	'updated_at',
]);

export default Driver_history_locationsScalarFieldEnumSchema;
