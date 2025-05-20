import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.reviewsOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reviewsOrderByRelationAggregateInputSchema;
