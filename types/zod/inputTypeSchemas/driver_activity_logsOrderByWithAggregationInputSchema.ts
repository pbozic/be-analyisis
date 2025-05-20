import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driver_activity_logsCountOrderByAggregateInputSchema } from './driver_activity_logsCountOrderByAggregateInputSchema';
import { driver_activity_logsMaxOrderByAggregateInputSchema } from './driver_activity_logsMaxOrderByAggregateInputSchema';
import { driver_activity_logsMinOrderByAggregateInputSchema } from './driver_activity_logsMinOrderByAggregateInputSchema';

export const driver_activity_logsOrderByWithAggregationInputSchema: z.ZodType<Prisma.driver_activity_logsOrderByWithAggregationInput> = z.object({
  driver_activity_log_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  ended_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timeout_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lockout_until: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => driver_activity_logsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => driver_activity_logsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => driver_activity_logsMinOrderByAggregateInputSchema).optional()
}).strict();

export default driver_activity_logsOrderByWithAggregationInputSchema;
