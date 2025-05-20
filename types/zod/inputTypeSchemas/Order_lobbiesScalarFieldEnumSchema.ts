import { z } from 'zod';

export const Order_lobbiesScalarFieldEnumSchema = z.enum([
	'order_lobbies_id',
	'lobby_name',
	'lobby_description',
	'active',
	'delivery_location',
	'courier_note',
	'business_id',
	'restaurant_id',
	'creator_id',
	'delivery_orders_id',
	'created_at',
	'updated_at',
]);

export default Order_lobbiesScalarFieldEnumSchema;
