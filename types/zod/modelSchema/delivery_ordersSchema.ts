import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { DELIVERY_ORDER_STATUSSchema } from '../inputTypeSchemas/DELIVERY_ORDER_STATUSSchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { delivery_order_sentWithRelationsSchema } from './delivery_order_sentSchema';
import type { delivery_order_sentWithRelations } from './delivery_order_sentSchema';
import { vehiclesWithRelationsSchema } from './vehiclesSchema';
import type { vehiclesWithRelations } from './vehiclesSchema';
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema';
import type { delivery_driversWithRelations } from './delivery_driversSchema';
import { driversWithRelationsSchema } from './driversSchema';
import type { driversWithRelations } from './driversSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { transactionsWithRelationsSchema } from './transactionsSchema';
import type { transactionsWithRelations } from './transactionsSchema';
import { wallet_transfer_historyWithRelationsSchema } from './wallet_transfer_historySchema';
import type { wallet_transfer_historyWithRelations } from './wallet_transfer_historySchema';
import { driver_history_locationsWithRelationsSchema } from './driver_history_locationsSchema';
import type { driver_history_locationsWithRelations } from './driver_history_locationsSchema';
import { delivery_driver_history_locationsWithRelationsSchema } from './delivery_driver_history_locationsSchema';
import type { delivery_driver_history_locationsWithRelations } from './delivery_driver_history_locationsSchema';
import { cashbackWithRelationsSchema } from './cashbackSchema';
import type { cashbackWithRelations } from './cashbackSchema';
import { order_lobbiesWithRelationsSchema } from './order_lobbiesSchema';
import type { order_lobbiesWithRelations } from './order_lobbiesSchema';
import { scoring_pointsWithRelationsSchema } from './scoring_pointsSchema';
import type { scoring_pointsWithRelations } from './scoring_pointsSchema';
import { late_eventsWithRelationsSchema } from './late_eventsSchema';
import type { late_eventsWithRelations } from './late_eventsSchema';

/////////////////////////////////////////
// DELIVERY ORDERS SCHEMA
/////////////////////////////////////////

export const delivery_ordersSchema = z.object({
	status: DELIVERY_ORDER_STATUSSchema,
	order_id: z.string().uuid(),
	user_id: z.string().nullable(),
	route: JsonValueSchema,
	pickup_location: JsonValueSchema,
	delivery_location: JsonValueSchema,
	payment: JsonValueSchema.nullable(),
	estimates: JsonValueSchema.nullable(),
	items: JsonValueSchema,
	details: JsonValueSchema.nullable(),
	courier_instructions: JsonValueSchema.nullable(),
	restaurant_message: JsonValueSchema.nullable(),
	scheduled: JsonValueSchema.nullable(),
	timeline: JsonValueSchema,
	last_sent_at: z.coerce.date().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	vehicle_id: z.string().nullable(),
	delivery_driver_id: z.string().nullable(),
	driver_id: z.string().nullable(),
	business_id: z.string().nullable(),
	payment_intent_id: z.string().nullable(),
	find_drivers_attempts: z.number().int().nullable(),
	is_daily_meal: z.boolean(),
	flags: JsonValueSchema.nullable(),
	allow_credits_usage: z.boolean(),
	order_number: z.number().int(),
});

export type delivery_orders = z.infer<typeof delivery_ordersSchema>;

/////////////////////////////////////////
// DELIVERY ORDERS RELATION SCHEMA
/////////////////////////////////////////

export type delivery_ordersRelations = {
	user?: usersWithRelations | null;
	history: delivery_order_sentWithRelations[];
	vehicle?: vehiclesWithRelations | null;
	delivery_driver?: delivery_driversWithRelations | null;
	driver?: driversWithRelations | null;
	business?: businessWithRelations | null;
	transactions: transactionsWithRelations[];
	wallet_transfer: wallet_transfer_historyWithRelations[];
	driver_history_locations: driver_history_locationsWithRelations[];
	delivery_driver_history_locations: delivery_driver_history_locationsWithRelations[];
	cashback: cashbackWithRelations[];
	order_lobbies?: order_lobbiesWithRelations | null;
	scoring_points: scoring_pointsWithRelations[];
	late_events: late_eventsWithRelations[];
};

export type delivery_ordersWithRelations = Omit<
	z.infer<typeof delivery_ordersSchema>,
	'payment' | 'estimates' | 'details' | 'courier_instructions' | 'restaurant_message' | 'scheduled' | 'flags'
> & {
	payment?: JsonValueType | null;
	estimates?: JsonValueType | null;
	details?: JsonValueType | null;
	courier_instructions?: JsonValueType | null;
	restaurant_message?: JsonValueType | null;
	scheduled?: JsonValueType | null;
	flags?: JsonValueType | null;
} & delivery_ordersRelations;

export const delivery_ordersWithRelationsSchema: z.ZodType<delivery_ordersWithRelations> = delivery_ordersSchema.merge(
	z.object({
		user: z.lazy(() => usersWithRelationsSchema).nullable(),
		history: z.lazy(() => delivery_order_sentWithRelationsSchema).array(),
		vehicle: z.lazy(() => vehiclesWithRelationsSchema).nullable(),
		delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
		driver: z.lazy(() => driversWithRelationsSchema).nullable(),
		business: z.lazy(() => businessWithRelationsSchema).nullable(),
		transactions: z.lazy(() => transactionsWithRelationsSchema).array(),
		wallet_transfer: z.lazy(() => wallet_transfer_historyWithRelationsSchema).array(),
		driver_history_locations: z.lazy(() => driver_history_locationsWithRelationsSchema).array(),
		delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsWithRelationsSchema).array(),
		cashback: z.lazy(() => cashbackWithRelationsSchema).array(),
		order_lobbies: z.lazy(() => order_lobbiesWithRelationsSchema).nullable(),
		scoring_points: z.lazy(() => scoring_pointsWithRelationsSchema).array(),
		late_events: z.lazy(() => late_eventsWithRelationsSchema).array(),
	})
);

export default delivery_ordersSchema;
