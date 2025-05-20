import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema } from './EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutDelivery_ordersNestedInputSchema } from './usersUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { delivery_order_sentUpdateManyWithoutOrderNestedInputSchema } from './delivery_order_sentUpdateManyWithoutOrderNestedInputSchema';
import { vehiclesUpdateOneWithoutDelivery_ordersNestedInputSchema } from './vehiclesUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { delivery_driversUpdateOneWithoutOrdersNestedInputSchema } from './delivery_driversUpdateOneWithoutOrdersNestedInputSchema';
import { driversUpdateOneWithoutDelivery_ordersNestedInputSchema } from './driversUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { businessUpdateOneWithoutDelivery_ordersNestedInputSchema } from './businessUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { transactionsUpdateManyWithoutDelivery_orderNestedInputSchema } from './transactionsUpdateManyWithoutDelivery_orderNestedInputSchema';
import { wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInputSchema } from './wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInputSchema';
import { driver_history_locationsUpdateManyWithoutDelivery_orderNestedInputSchema } from './driver_history_locationsUpdateManyWithoutDelivery_orderNestedInputSchema';
import { delivery_driver_history_locationsUpdateManyWithoutOrderNestedInputSchema } from './delivery_driver_history_locationsUpdateManyWithoutOrderNestedInputSchema';
import { cashbackUpdateManyWithoutDelivery_orderNestedInputSchema } from './cashbackUpdateManyWithoutDelivery_orderNestedInputSchema';
import { order_lobbiesUpdateOneWithoutDelivery_ordersNestedInputSchema } from './order_lobbiesUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { late_eventsUpdateManyWithoutDelivery_ordersNestedInputSchema } from './late_eventsUpdateManyWithoutDelivery_ordersNestedInputSchema';

export const delivery_ordersUpdateWithoutScoring_pointsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithoutScoring_pointsInput> = z.object({
  order_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  route: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  pickup_location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  payment: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  estimates: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  items: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  details: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  courier_instructions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  restaurant_message: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  scheduled: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  timeline: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema) ]).optional(),
  last_sent_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment_intent_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_daily_meal: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  flags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allow_credits_usage: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneWithoutDelivery_ordersNestedInputSchema).optional(),
  history: z.lazy(() => delivery_order_sentUpdateManyWithoutOrderNestedInputSchema).optional(),
  vehicle: z.lazy(() => vehiclesUpdateOneWithoutDelivery_ordersNestedInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversUpdateOneWithoutOrdersNestedInputSchema).optional(),
  driver: z.lazy(() => driversUpdateOneWithoutDelivery_ordersNestedInputSchema).optional(),
  business: z.lazy(() => businessUpdateOneWithoutDelivery_ordersNestedInputSchema).optional(),
  transactions: z.lazy(() => transactionsUpdateManyWithoutDelivery_orderNestedInputSchema).optional(),
  wallet_transfer: z.lazy(() => wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInputSchema).optional(),
  driver_history_locations: z.lazy(() => driver_history_locationsUpdateManyWithoutDelivery_orderNestedInputSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsUpdateManyWithoutOrderNestedInputSchema).optional(),
  cashback: z.lazy(() => cashbackUpdateManyWithoutDelivery_orderNestedInputSchema).optional(),
  order_lobbies: z.lazy(() => order_lobbiesUpdateOneWithoutDelivery_ordersNestedInputSchema).optional(),
  late_events: z.lazy(() => late_eventsUpdateManyWithoutDelivery_ordersNestedInputSchema).optional()
}).strict();

export default delivery_ordersUpdateWithoutScoring_pointsInputSchema;
