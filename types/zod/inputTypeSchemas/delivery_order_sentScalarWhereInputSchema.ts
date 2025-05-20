import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const delivery_order_sentScalarWhereInputSchema: z.ZodType<Prisma.delivery_order_sentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_order_sentScalarWhereInputSchema),z.lazy(() => delivery_order_sentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_order_sentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_order_sentScalarWhereInputSchema),z.lazy(() => delivery_order_sentScalarWhereInputSchema).array() ]).optional(),
  delivery_order_sent_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  accepted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  location: z.lazy(() => JsonFilterSchema).optional(),
  timeline: z.lazy(() => JsonFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default delivery_order_sentScalarWhereInputSchema;
