import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const taxi_order_sentScalarWhereInputSchema: z.ZodType<Prisma.taxi_order_sentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => taxi_order_sentScalarWhereInputSchema),z.lazy(() => taxi_order_sentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => taxi_order_sentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => taxi_order_sentScalarWhereInputSchema),z.lazy(() => taxi_order_sentScalarWhereInputSchema).array() ]).optional(),
  taxi_order_sent_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  accepted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  location: z.lazy(() => JsonNullableFilterSchema).optional(),
  timeline: z.lazy(() => JsonFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  rejected: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default taxi_order_sentScalarWhereInputSchema;
