import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema } from './taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema';
import { delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema } from './delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema';

export const driver_history_locationsUpdateWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateWithoutDriverInput> = z.object({
  driver_history_location_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => taxi_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema).optional(),
  delivery_order: z.lazy(() => delivery_ordersUpdateOneWithoutDriver_history_locationsNestedInputSchema).optional()
}).strict();

export default driver_history_locationsUpdateWithoutDriverInputSchema;
