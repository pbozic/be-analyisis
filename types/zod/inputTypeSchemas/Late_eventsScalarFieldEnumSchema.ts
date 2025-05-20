import { z } from 'zod';

export const Late_eventsScalarFieldEnumSchema = z.enum([
	'late_events_id',
	'business_id',
	'user_id',
	'delivery_order_id',
	'taxi_order_id',
	'scoring_points_id',
	'seconds',
	'created_at',
	'updated_at',
]);

export default Late_eventsScalarFieldEnumSchema;
