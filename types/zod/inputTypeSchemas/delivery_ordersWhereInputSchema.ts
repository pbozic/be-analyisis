import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { EnumDELIVERY_ORDER_STATUSFilterSchema } from './EnumDELIVERY_ORDER_STATUSFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Delivery_order_sentListRelationFilterSchema } from './Delivery_order_sentListRelationFilterSchema';
import { VehiclesNullableRelationFilterSchema } from './VehiclesNullableRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { TransactionsListRelationFilterSchema } from './TransactionsListRelationFilterSchema';
import { Wallet_transfer_historyListRelationFilterSchema } from './Wallet_transfer_historyListRelationFilterSchema';
import { Driver_history_locationsListRelationFilterSchema } from './Driver_history_locationsListRelationFilterSchema';
import { Delivery_driver_history_locationsListRelationFilterSchema } from './Delivery_driver_history_locationsListRelationFilterSchema';
import { CashbackListRelationFilterSchema } from './CashbackListRelationFilterSchema';
import { Order_lobbiesNullableRelationFilterSchema } from './Order_lobbiesNullableRelationFilterSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { Scoring_pointsListRelationFilterSchema } from './Scoring_pointsListRelationFilterSchema';
import { Late_eventsListRelationFilterSchema } from './Late_eventsListRelationFilterSchema';

export const delivery_ordersWhereInputSchema: z.ZodType<Prisma.delivery_ordersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_ordersWhereInputSchema),z.lazy(() => delivery_ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_ordersWhereInputSchema),z.lazy(() => delivery_ordersWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  route: z.lazy(() => JsonFilterSchema).optional(),
  pickup_location: z.lazy(() => JsonFilterSchema).optional(),
  delivery_location: z.lazy(() => JsonFilterSchema).optional(),
  payment: z.lazy(() => JsonNullableFilterSchema).optional(),
  estimates: z.lazy(() => JsonNullableFilterSchema).optional(),
  items: z.lazy(() => JsonFilterSchema).optional(),
  details: z.lazy(() => JsonNullableFilterSchema).optional(),
  courier_instructions: z.lazy(() => JsonNullableFilterSchema).optional(),
  restaurant_message: z.lazy(() => JsonNullableFilterSchema).optional(),
  scheduled: z.lazy(() => JsonNullableFilterSchema).optional(),
  timeline: z.lazy(() => JsonFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumDELIVERY_ORDER_STATUSFilterSchema),z.lazy(() => DELIVERY_ORDER_STATUSSchema) ]).optional(),
  last_sent_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  payment_intent_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  is_daily_meal: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  flags: z.lazy(() => JsonNullableFilterSchema).optional(),
  allow_credits_usage: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  history: z.lazy(() => Delivery_order_sentListRelationFilterSchema).optional(),
  vehicle: z.union([ z.lazy(() => VehiclesNullableRelationFilterSchema),z.lazy(() => vehiclesWhereInputSchema) ]).optional().nullable(),
  delivery_driver: z.union([ z.lazy(() => Delivery_driversNullableRelationFilterSchema),z.lazy(() => delivery_driversWhereInputSchema) ]).optional().nullable(),
  driver: z.union([ z.lazy(() => DriversNullableRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional().nullable(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  transactions: z.lazy(() => TransactionsListRelationFilterSchema).optional(),
  wallet_transfer: z.lazy(() => Wallet_transfer_historyListRelationFilterSchema).optional(),
  driver_history_locations: z.lazy(() => Driver_history_locationsListRelationFilterSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => Delivery_driver_history_locationsListRelationFilterSchema).optional(),
  cashback: z.lazy(() => CashbackListRelationFilterSchema).optional(),
  order_lobbies: z.union([ z.lazy(() => Order_lobbiesNullableRelationFilterSchema),z.lazy(() => order_lobbiesWhereInputSchema) ]).optional().nullable(),
  scoring_points: z.lazy(() => Scoring_pointsListRelationFilterSchema).optional(),
  late_events: z.lazy(() => Late_eventsListRelationFilterSchema).optional()
}).strict();

export default delivery_ordersWhereInputSchema;
