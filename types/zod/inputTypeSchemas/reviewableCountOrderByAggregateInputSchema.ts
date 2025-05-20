import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reviewableCountOrderByAggregateInputSchema: z.ZodType<Prisma.reviewableCountOrderByAggregateInput> = z
	.object({
		reviewable_id: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reviewableCountOrderByAggregateInputSchema;
