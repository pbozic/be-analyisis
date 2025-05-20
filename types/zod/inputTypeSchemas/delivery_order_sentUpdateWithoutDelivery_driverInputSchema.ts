import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { delivery_ordersUpdateOneWithoutHistoryNestedInputSchema } from './delivery_ordersUpdateOneWithoutHistoryNestedInputSchema';
import { driversUpdateOneWithoutReceived_delivery_ordersNestedInputSchema } from './driversUpdateOneWithoutReceived_delivery_ordersNestedInputSchema';

export const delivery_order_sentUpdateWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateWithoutDelivery_driverInput> = z.object({
  delivery_order_sent_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accepted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  timeline: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => delivery_ordersUpdateOneWithoutHistoryNestedInputSchema).optional(),
  driver: z.lazy(() => driversUpdateOneWithoutReceived_delivery_ordersNestedInputSchema).optional()
}).strict();

export default delivery_order_sentUpdateWithoutDelivery_driverInputSchema;
