import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';

export const taxi_order_sentCreateManyInputSchema: z.ZodType<Prisma.taxi_order_sentCreateManyInput> = z.object({
  taxi_order_sent_id: z.string().uuid().optional(),
  order_id: z.string(),
  driver_id: z.string(),
  accepted: z.boolean().optional(),
  location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  timeline: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  rejected: z.boolean().optional()
}).strict();

export default taxi_order_sentCreateManyInputSchema;
