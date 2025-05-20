import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { taxi_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema } from './taxi_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema';
import { taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInputSchema';
import { driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema } from './driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema';
import { wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInputSchema';
import { transactionsUncheckedCreateNestedManyWithoutTaxi_orderInputSchema } from './transactionsUncheckedCreateNestedManyWithoutTaxi_orderInputSchema';
import { cashbackUncheckedCreateNestedManyWithoutTaxi_orderInputSchema } from './cashbackUncheckedCreateNestedManyWithoutTaxi_orderInputSchema';
import { scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema';

export const taxi_ordersUncheckedCreateInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedCreateInput> = z.object({
  order_id: z.string().uuid().optional(),
  user_id: z.string(),
  business_users_id: z.string().optional().nullable(),
  business_clients_id: z.string().optional().nullable(),
  driver_id: z.string().optional().nullable(),
  vehicle_id: z.string().optional().nullable(),
  route: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  pickup_location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  delivery_location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  payment: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  estimates: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  timeline: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.lazy(() => TAXI_ORDER_STATUSSchema),
  last_sent_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  business_id: z.string().optional().nullable(),
  telephone: z.string().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  cancellation_reason: z.string().optional().nullable(),
  find_drivers_attempts: z.number().int().optional().nullable(),
  is_scheduled: z.boolean().optional(),
  parent_order_id: z.string().optional().nullable(),
  type: z.lazy(() => ORDER_TYPESchema).optional(),
  subtype: z.lazy(() => ORDER_SUBTYPESchema).optional(),
  flags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  cargo_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  customer_note: z.string().optional().nullable(),
  parent_user_type: z.string().optional().nullable(),
  creating_user_id: z.string().optional().nullable(),
  allow_credits_usage: z.boolean().optional(),
  order_number: z.number().int().optional(),
  history: z.lazy(() => taxi_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema).optional(),
  grouped_orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutParent_orderInputSchema).optional(),
  driver_history_locations: z.lazy(() => driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema).optional(),
  wallet_transfer: z.lazy(() => wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInputSchema).optional(),
  transactions: z.lazy(() => transactionsUncheckedCreateNestedManyWithoutTaxi_orderInputSchema).optional(),
  cashback: z.lazy(() => cashbackUncheckedCreateNestedManyWithoutTaxi_orderInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema).optional(),
  late_events: z.lazy(() => late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema).optional()
}).strict();

export default taxi_ordersUncheckedCreateInputSchema;
