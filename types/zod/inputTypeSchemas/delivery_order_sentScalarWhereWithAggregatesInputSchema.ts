import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const delivery_order_sentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.delivery_order_sentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_order_sentScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_order_sentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_order_sentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_order_sentScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_order_sentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  delivery_order_sent_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  accepted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  location: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  timeline: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default delivery_order_sentScalarWhereWithAggregatesInputSchema;
