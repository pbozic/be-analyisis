import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const driver_history_locationsCreateManyDriverInputSchema: z.ZodType<Prisma.driver_history_locationsCreateManyDriverInput> = z.object({
  driver_history_location_id: z.string().uuid().optional(),
  taxi_order_id: z.string().optional().nullable(),
  delivery_order_id: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default driver_history_locationsCreateManyDriverInputSchema;
