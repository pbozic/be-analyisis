import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { reservationsCountOrderByAggregateInputSchema } from './reservationsCountOrderByAggregateInputSchema';
import { reservationsAvgOrderByAggregateInputSchema } from './reservationsAvgOrderByAggregateInputSchema';
import { reservationsMaxOrderByAggregateInputSchema } from './reservationsMaxOrderByAggregateInputSchema';
import { reservationsMinOrderByAggregateInputSchema } from './reservationsMinOrderByAggregateInputSchema';
import { reservationsSumOrderByAggregateInputSchema } from './reservationsSumOrderByAggregateInputSchema';

export const reservationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.reservationsOrderByWithAggregationInput> = z.object({
  reservation_id: z.lazy(() => SortOrderSchema).optional(),
  seats: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  table: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => reservationsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => reservationsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => reservationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => reservationsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => reservationsSumOrderByAggregateInputSchema).optional()
}).strict();

export default reservationsOrderByWithAggregationInputSchema;
