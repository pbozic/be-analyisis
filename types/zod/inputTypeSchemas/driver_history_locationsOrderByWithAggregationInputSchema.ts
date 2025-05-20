import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driver_history_locationsCountOrderByAggregateInputSchema } from './driver_history_locationsCountOrderByAggregateInputSchema';
import { driver_history_locationsMaxOrderByAggregateInputSchema } from './driver_history_locationsMaxOrderByAggregateInputSchema';
import { driver_history_locationsMinOrderByAggregateInputSchema } from './driver_history_locationsMinOrderByAggregateInputSchema';

export const driver_history_locationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.driver_history_locationsOrderByWithAggregationInput> = z.object({
  driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  taxi_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivery_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => driver_history_locationsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => driver_history_locationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => driver_history_locationsMinOrderByAggregateInputSchema).optional()
}).strict();

export default driver_history_locationsOrderByWithAggregationInputSchema;
