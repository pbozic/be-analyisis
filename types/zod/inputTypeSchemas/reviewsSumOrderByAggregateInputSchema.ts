import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewsSumOrderByAggregateInputSchema: z.ZodType<Prisma.reviewsSumOrderByAggregateInput> = z
	.object({
		rating: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reviewsSumOrderByAggregateInputSchema;
