import { z } from 'zod';

export const Taxi_order_sentScalarFieldEnumSchema = z.enum([
	'taxi_order_sent_id',
	'order_id',
	'driver_id',
	'accepted',
	'location',
	'timeline',
	'created_at',
	'updated_at',
	'rejected',
]);

export default Taxi_order_sentScalarFieldEnumSchema;
