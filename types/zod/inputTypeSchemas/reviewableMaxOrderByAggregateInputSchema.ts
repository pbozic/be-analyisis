import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewableMaxOrderByAggregateInputSchema: z.ZodType<Prisma.reviewableMaxOrderByAggregateInput> = z.object({
  reviewable_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default reviewableMaxOrderByAggregateInputSchema;
