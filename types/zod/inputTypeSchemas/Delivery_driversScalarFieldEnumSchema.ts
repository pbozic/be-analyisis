import { z } from 'zod';

export const Delivery_driversScalarFieldEnumSchema = z.enum([
	'delivery_driver_id',
	'online',
	'on_order',
	'delivers_daily_meals',
	'working_hours',
	'business_id',
	'created_at',
	'updated_at',
	'user_id',
	'location',
	'delivery_timeline',
	'last_ping_at',
	'on_daily_meals',
	'is_inactive',
	'scheduled_meals_route',
	'regions',
	'partner_cash_balance',
	'daily_meal_business_id',
]);

export default Delivery_driversScalarFieldEnumSchema;
