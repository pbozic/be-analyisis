import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { reviewableCountOrderByAggregateInputSchema } from './reviewableCountOrderByAggregateInputSchema';
import { reviewableMaxOrderByAggregateInputSchema } from './reviewableMaxOrderByAggregateInputSchema';
import { reviewableMinOrderByAggregateInputSchema } from './reviewableMinOrderByAggregateInputSchema';

export const reviewableOrderByWithAggregationInputSchema: z.ZodType<Prisma.reviewableOrderByWithAggregationInput> = z.object({
  reviewable_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => reviewableCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => reviewableMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => reviewableMinOrderByAggregateInputSchema).optional()
}).strict();

export default reviewableOrderByWithAggregationInputSchema;
