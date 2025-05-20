import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.reviewsAvgOrderByAggregateInput> = z
	.object({
		rating: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reviewsAvgOrderByAggregateInputSchema;
