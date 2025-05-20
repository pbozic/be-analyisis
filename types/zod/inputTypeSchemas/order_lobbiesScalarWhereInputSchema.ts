import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const order_lobbiesScalarWhereInputSchema: z.ZodType<Prisma.order_lobbiesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => order_lobbiesScalarWhereInputSchema),z.lazy(() => order_lobbiesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => order_lobbiesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => order_lobbiesScalarWhereInputSchema),z.lazy(() => order_lobbiesScalarWhereInputSchema).array() ]).optional(),
  order_lobbies_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  lobby_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lobby_description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  delivery_location: z.lazy(() => JsonNullableFilterSchema).optional(),
  courier_note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  restaurant_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  creator_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  delivery_orders_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default order_lobbiesScalarWhereInputSchema;
