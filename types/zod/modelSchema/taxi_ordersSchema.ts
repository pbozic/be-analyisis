import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { TAXI_ORDER_STATUSSchema } from '../inputTypeSchemas/TAXI_ORDER_STATUSSchema'
import { ORDER_TYPESchema } from '../inputTypeSchemas/ORDER_TYPESchema'
import { ORDER_SUBTYPESchema } from '../inputTypeSchemas/ORDER_SUBTYPESchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'
import { vehiclesWithRelationsSchema } from './vehiclesSchema'
import type { vehiclesWithRelations } from './vehiclesSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { business_usersWithRelationsSchema } from './business_usersSchema'
import type { business_usersWithRelations } from './business_usersSchema'
import { business_clientsWithRelationsSchema } from './business_clientsSchema'
import type { business_clientsWithRelations } from './business_clientsSchema'
import { taxi_order_sentWithRelationsSchema } from './taxi_order_sentSchema'
import type { taxi_order_sentWithRelations } from './taxi_order_sentSchema'
import { driver_history_locationsWithRelationsSchema } from './driver_history_locationsSchema'
import type { driver_history_locationsWithRelations } from './driver_history_locationsSchema'
import { wallet_transfer_historyWithRelationsSchema } from './wallet_transfer_historySchema'
import type { wallet_transfer_historyWithRelations } from './wallet_transfer_historySchema'
import { transactionsWithRelationsSchema } from './transactionsSchema'
import type { transactionsWithRelations } from './transactionsSchema'
import { cashbackWithRelationsSchema } from './cashbackSchema'
import type { cashbackWithRelations } from './cashbackSchema'
import { scoring_pointsWithRelationsSchema } from './scoring_pointsSchema'
import type { scoring_pointsWithRelations } from './scoring_pointsSchema'
import { late_eventsWithRelationsSchema } from './late_eventsSchema'
import type { late_eventsWithRelations } from './late_eventsSchema'

/////////////////////////////////////////
// TAXI ORDERS SCHEMA
/////////////////////////////////////////

export const taxi_ordersSchema = z.object({
  status: TAXI_ORDER_STATUSSchema,
  type: ORDER_TYPESchema,
  subtype: ORDER_SUBTYPESchema,
  order_id: z.string().uuid(),
  user_id: z.string(),
  business_users_id: z.string().nullable(),
  business_clients_id: z.string().nullable(),
  driver_id: z.string().nullable(),
  vehicle_id: z.string().nullable(),
  route: JsonValueSchema,
  pickup_location: JsonValueSchema,
  delivery_location: JsonValueSchema.nullable(),
  payment: JsonValueSchema.nullable(),
  estimates: JsonValueSchema.nullable(),
  timeline: JsonValueSchema,
  preferences: JsonValueSchema.nullable(),
  last_sent_at: z.coerce.date().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  business_id: z.string().nullable(),
  telephone: z.string().nullable(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  cancellation_reason: z.string().nullable(),
  find_drivers_attempts: z.number().int().nullable(),
  is_scheduled: z.boolean(),
  parent_order_id: z.string().nullable(),
  flags: JsonValueSchema.nullable(),
  cargo_preferences: JsonValueSchema.nullable(),
  customer_note: z.string().nullable(),
  parent_user_type: z.string().nullable(),
  creating_user_id: z.string().nullable(),
  allow_credits_usage: z.boolean(),
  order_number: z.number().int(),
})

export type taxi_orders = z.infer<typeof taxi_ordersSchema>

/////////////////////////////////////////
// TAXI ORDERS RELATION SCHEMA
/////////////////////////////////////////

export type taxi_ordersRelations = {
  business?: businessWithRelations | null;
  driver?: driversWithRelations | null;
  vehicle?: vehiclesWithRelations | null;
  user?: usersWithRelations | null;
  business_users?: business_usersWithRelations | null;
  business_clients?: business_clientsWithRelations | null;
  history: taxi_order_sentWithRelations[];
  parent_order?: taxi_ordersWithRelations | null;
  grouped_orders: taxi_ordersWithRelations[];
  driver_history_locations: driver_history_locationsWithRelations[];
  wallet_transfer: wallet_transfer_historyWithRelations[];
  transactions: transactionsWithRelations[];
  cashback: cashbackWithRelations[];
  scoring_points: scoring_pointsWithRelations[];
  late_events: late_eventsWithRelations[];
};

export type taxi_ordersWithRelations = Omit<z.infer<typeof taxi_ordersSchema>, "delivery_location" | "payment" | "estimates" | "preferences" | "flags" | "cargo_preferences"> & {
  delivery_location?: JsonValueType | null;
  payment?: JsonValueType | null;
  estimates?: JsonValueType | null;
  preferences?: JsonValueType | null;
  flags?: JsonValueType | null;
  cargo_preferences?: JsonValueType | null;
} & taxi_ordersRelations

export const taxi_ordersWithRelationsSchema: z.ZodType<taxi_ordersWithRelations> = taxi_ordersSchema.merge(z.object({
  business: z.lazy(() => businessWithRelationsSchema).nullable(),
  driver: z.lazy(() => driversWithRelationsSchema).nullable(),
  vehicle: z.lazy(() => vehiclesWithRelationsSchema).nullable(),
  user: z.lazy(() => usersWithRelationsSchema).nullable(),
  business_users: z.lazy(() => business_usersWithRelationsSchema).nullable(),
  business_clients: z.lazy(() => business_clientsWithRelationsSchema).nullable(),
  history: z.lazy(() => taxi_order_sentWithRelationsSchema).array(),
  parent_order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
  grouped_orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
  driver_history_locations: z.lazy(() => driver_history_locationsWithRelationsSchema).array(),
  wallet_transfer: z.lazy(() => wallet_transfer_historyWithRelationsSchema).array(),
  transactions: z.lazy(() => transactionsWithRelationsSchema).array(),
  cashback: z.lazy(() => cashbackWithRelationsSchema).array(),
  scoring_points: z.lazy(() => scoring_pointsWithRelationsSchema).array(),
  late_events: z.lazy(() => late_eventsWithRelationsSchema).array(),
}))

export default taxi_ordersSchema;
