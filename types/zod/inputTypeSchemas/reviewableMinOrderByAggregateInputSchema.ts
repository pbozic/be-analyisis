import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewableMinOrderByAggregateInputSchema: z.ZodType<Prisma.reviewableMinOrderByAggregateInput> = z.object({
  reviewable_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default reviewableMinOrderByAggregateInputSchema;
