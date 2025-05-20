import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_teamsSumOrderByAggregateInputSchema: z.ZodType<Prisma.business_teamsSumOrderByAggregateInput> = z
	.object({
		limit_per_person: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default business_teamsSumOrderByAggregateInputSchema;
