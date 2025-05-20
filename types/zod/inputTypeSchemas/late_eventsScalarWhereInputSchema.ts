import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const late_eventsScalarWhereInputSchema: z.ZodType<Prisma.late_eventsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => late_eventsScalarWhereInputSchema),z.lazy(() => late_eventsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => late_eventsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => late_eventsScalarWhereInputSchema),z.lazy(() => late_eventsScalarWhereInputSchema).array() ]).optional(),
  late_events_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  scoring_points_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  seconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default late_eventsScalarWhereInputSchema;
