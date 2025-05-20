import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { reviewsCountOrderByAggregateInputSchema } from './reviewsCountOrderByAggregateInputSchema';
import { reviewsAvgOrderByAggregateInputSchema } from './reviewsAvgOrderByAggregateInputSchema';
import { reviewsMaxOrderByAggregateInputSchema } from './reviewsMaxOrderByAggregateInputSchema';
import { reviewsMinOrderByAggregateInputSchema } from './reviewsMinOrderByAggregateInputSchema';
import { reviewsSumOrderByAggregateInputSchema } from './reviewsSumOrderByAggregateInputSchema';

export const reviewsOrderByWithAggregationInputSchema: z.ZodType<Prisma.reviewsOrderByWithAggregationInput> = z.object({
  review_id: z.lazy(() => SortOrderSchema).optional(),
  reviewable_id: z.lazy(() => SortOrderSchema).optional(),
  author_id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  feedback: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => reviewsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => reviewsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => reviewsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => reviewsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => reviewsSumOrderByAggregateInputSchema).optional()
}).strict();

export default reviewsOrderByWithAggregationInputSchema;
