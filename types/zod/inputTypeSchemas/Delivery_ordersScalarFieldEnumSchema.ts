import { z } from 'zod';

export const Delivery_ordersScalarFieldEnumSchema = z.enum([
	'order_id',
	'user_id',
	'route',
	'pickup_location',
	'delivery_location',
	'payment',
	'estimates',
	'items',
	'details',
	'courier_instructions',
	'restaurant_message',
	'scheduled',
	'timeline',
	'status',
	'last_sent_at',
	'created_at',
	'updated_at',
	'vehicle_id',
	'delivery_driver_id',
	'driver_id',
	'business_id',
	'payment_intent_id',
	'find_drivers_attempts',
	'is_daily_meal',
	'flags',
	'allow_credits_usage',
	'order_number',
]);

export default Delivery_ordersScalarFieldEnumSchema;
