import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { usersCreateNestedOneWithoutDelivery_ordersInputSchema } from './usersCreateNestedOneWithoutDelivery_ordersInputSchema';
import { vehiclesCreateNestedOneWithoutDelivery_ordersInputSchema } from './vehiclesCreateNestedOneWithoutDelivery_ordersInputSchema';
import { delivery_driversCreateNestedOneWithoutOrdersInputSchema } from './delivery_driversCreateNestedOneWithoutOrdersInputSchema';
import { driversCreateNestedOneWithoutDelivery_ordersInputSchema } from './driversCreateNestedOneWithoutDelivery_ordersInputSchema';
import { businessCreateNestedOneWithoutDelivery_ordersInputSchema } from './businessCreateNestedOneWithoutDelivery_ordersInputSchema';
import { transactionsCreateNestedManyWithoutDelivery_orderInputSchema } from './transactionsCreateNestedManyWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInputSchema';
import { driver_history_locationsCreateNestedManyWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateNestedManyWithoutDelivery_orderInputSchema';
import { delivery_driver_history_locationsCreateNestedManyWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateNestedManyWithoutOrderInputSchema';
import { cashbackCreateNestedManyWithoutDelivery_orderInputSchema } from './cashbackCreateNestedManyWithoutDelivery_orderInputSchema';
import { order_lobbiesCreateNestedOneWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateNestedOneWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateNestedManyWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateNestedManyWithoutDelivery_ordersInputSchema';
import { late_eventsCreateNestedManyWithoutDelivery_ordersInputSchema } from './late_eventsCreateNestedManyWithoutDelivery_ordersInputSchema';

export const delivery_ordersCreateWithoutHistoryInputSchema: z.ZodType<Prisma.delivery_ordersCreateWithoutHistoryInput> = z.object({
  order_id: z.string().uuid().optional(),
  route: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  pickup_location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  delivery_location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  payment: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  estimates: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  items: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  details: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  courier_instructions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  restaurant_message: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  scheduled: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  timeline: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.lazy(() => DELIVERY_ORDER_STATUSSchema),
  last_sent_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  payment_intent_id: z.string().optional().nullable(),
  find_drivers_attempts: z.number().int().optional().nullable(),
  is_daily_meal: z.boolean().optional(),
  flags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allow_credits_usage: z.boolean().optional(),
  order_number: z.number().int().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutDelivery_ordersInputSchema).optional(),
  vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutDelivery_ordersInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutOrdersInputSchema).optional(),
  driver: z.lazy(() => driversCreateNestedOneWithoutDelivery_ordersInputSchema).optional(),
  business: z.lazy(() => businessCreateNestedOneWithoutDelivery_ordersInputSchema).optional(),
  transactions: z.lazy(() => transactionsCreateNestedManyWithoutDelivery_orderInputSchema).optional(),
  wallet_transfer: z.lazy(() => wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInputSchema).optional(),
  driver_history_locations: z.lazy(() => driver_history_locationsCreateNestedManyWithoutDelivery_orderInputSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsCreateNestedManyWithoutOrderInputSchema).optional(),
  cashback: z.lazy(() => cashbackCreateNestedManyWithoutDelivery_orderInputSchema).optional(),
  order_lobbies: z.lazy(() => order_lobbiesCreateNestedOneWithoutDelivery_ordersInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsCreateNestedManyWithoutDelivery_ordersInputSchema).optional(),
  late_events: z.lazy(() => late_eventsCreateNestedManyWithoutDelivery_ordersInputSchema).optional()
}).strict();

export default delivery_ordersCreateWithoutHistoryInputSchema;
