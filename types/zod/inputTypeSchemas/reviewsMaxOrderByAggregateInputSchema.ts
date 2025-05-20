import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.reviewsMaxOrderByAggregateInput> = z.object({
  review_id: z.lazy(() => SortOrderSchema).optional(),
  reviewable_id: z.lazy(() => SortOrderSchema).optional(),
  author_id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default reviewsMaxOrderByAggregateInputSchema;
