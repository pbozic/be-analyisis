import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { EnumTAXI_ORDER_STATUSFilterSchema } from './EnumTAXI_ORDER_STATUSFilterSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumORDER_TYPEFilterSchema } from './EnumORDER_TYPEFilterSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { EnumORDER_SUBTYPEFilterSchema } from './EnumORDER_SUBTYPEFilterSchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { VehiclesNullableRelationFilterSchema } from './VehiclesNullableRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Business_usersNullableRelationFilterSchema } from './Business_usersNullableRelationFilterSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { Business_clientsNullableRelationFilterSchema } from './Business_clientsNullableRelationFilterSchema';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';
import { Taxi_order_sentListRelationFilterSchema } from './Taxi_order_sentListRelationFilterSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';
import { Driver_history_locationsListRelationFilterSchema } from './Driver_history_locationsListRelationFilterSchema';
import { Wallet_transfer_historyListRelationFilterSchema } from './Wallet_transfer_historyListRelationFilterSchema';
import { TransactionsListRelationFilterSchema } from './TransactionsListRelationFilterSchema';
import { CashbackListRelationFilterSchema } from './CashbackListRelationFilterSchema';
import { Scoring_pointsListRelationFilterSchema } from './Scoring_pointsListRelationFilterSchema';
import { Late_eventsListRelationFilterSchema } from './Late_eventsListRelationFilterSchema';

export const taxi_ordersWhereInputSchema: z.ZodType<Prisma.taxi_ordersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => taxi_ordersWhereInputSchema),z.lazy(() => taxi_ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => taxi_ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => taxi_ordersWhereInputSchema),z.lazy(() => taxi_ordersWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_users_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  business_clients_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  route: z.lazy(() => JsonFilterSchema).optional(),
  pickup_location: z.lazy(() => JsonFilterSchema).optional(),
  delivery_location: z.lazy(() => JsonNullableFilterSchema).optional(),
  payment: z.lazy(() => JsonNullableFilterSchema).optional(),
  estimates: z.lazy(() => JsonNullableFilterSchema).optional(),
  timeline: z.lazy(() => JsonFilterSchema).optional(),
  preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumTAXI_ORDER_STATUSFilterSchema),z.lazy(() => TAXI_ORDER_STATUSSchema) ]).optional(),
  last_sent_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  first_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cancellation_reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  is_scheduled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  parent_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumORDER_TYPEFilterSchema),z.lazy(() => ORDER_TYPESchema) ]).optional(),
  subtype: z.union([ z.lazy(() => EnumORDER_SUBTYPEFilterSchema),z.lazy(() => ORDER_SUBTYPESchema) ]).optional(),
  flags: z.lazy(() => JsonNullableFilterSchema).optional(),
  cargo_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  customer_note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parent_user_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  creating_user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  allow_credits_usage: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  driver: z.union([ z.lazy(() => DriversNullableRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional().nullable(),
  vehicle: z.union([ z.lazy(() => VehiclesNullableRelationFilterSchema),z.lazy(() => vehiclesWhereInputSchema) ]).optional().nullable(),
  user: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  business_users: z.union([ z.lazy(() => Business_usersNullableRelationFilterSchema),z.lazy(() => business_usersWhereInputSchema) ]).optional().nullable(),
  business_clients: z.union([ z.lazy(() => Business_clientsNullableRelationFilterSchema),z.lazy(() => business_clientsWhereInputSchema) ]).optional().nullable(),
  history: z.lazy(() => Taxi_order_sentListRelationFilterSchema).optional(),
  parent_order: z.union([ z.lazy(() => Taxi_ordersNullableRelationFilterSchema),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional().nullable(),
  grouped_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
  driver_history_locations: z.lazy(() => Driver_history_locationsListRelationFilterSchema).optional(),
  wallet_transfer: z.lazy(() => Wallet_transfer_historyListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionsListRelationFilterSchema).optional(),
  cashback: z.lazy(() => CashbackListRelationFilterSchema).optional(),
  scoring_points: z.lazy(() => Scoring_pointsListRelationFilterSchema).optional(),
  late_events: z.lazy(() => Late_eventsListRelationFilterSchema).optional()
}).strict();

export default taxi_ordersWhereInputSchema;
