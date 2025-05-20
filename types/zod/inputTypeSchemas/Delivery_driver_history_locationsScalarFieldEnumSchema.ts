import { z } from 'zod';

export const Delivery_driver_history_locationsScalarFieldEnumSchema = z.enum([
	'delivery_driver_history_location_id',
	'delivery_driver_id',
	'order_id',
	'status',
	'location',
	'created_at',
	'updated_at',
]);

export default Delivery_driver_history_locationsScalarFieldEnumSchema;
