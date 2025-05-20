import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { late_eventsCountOrderByAggregateInputSchema } from './late_eventsCountOrderByAggregateInputSchema';
import { late_eventsAvgOrderByAggregateInputSchema } from './late_eventsAvgOrderByAggregateInputSchema';
import { late_eventsMaxOrderByAggregateInputSchema } from './late_eventsMaxOrderByAggregateInputSchema';
import { late_eventsMinOrderByAggregateInputSchema } from './late_eventsMinOrderByAggregateInputSchema';
import { late_eventsSumOrderByAggregateInputSchema } from './late_eventsSumOrderByAggregateInputSchema';

export const late_eventsOrderByWithAggregationInputSchema: z.ZodType<Prisma.late_eventsOrderByWithAggregationInput> = z.object({
  late_events_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxi_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scoring_points_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  seconds: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => late_eventsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => late_eventsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => late_eventsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => late_eventsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => late_eventsSumOrderByAggregateInputSchema).optional()
}).strict();

export default late_eventsOrderByWithAggregationInputSchema;
