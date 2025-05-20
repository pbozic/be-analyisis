import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const order_lobbiesCreateManyBusinessInputSchema: z.ZodType<Prisma.order_lobbiesCreateManyBusinessInput> = z.object({
  order_lobbies_id: z.string().uuid().optional(),
  lobby_name: z.string(),
  lobby_description: z.string(),
  active: z.boolean().optional(),
  delivery_location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  courier_note: z.string().optional().nullable(),
  restaurant_id: z.string(),
  creator_id: z.string(),
  delivery_orders_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default order_lobbiesCreateManyBusinessInputSchema;
