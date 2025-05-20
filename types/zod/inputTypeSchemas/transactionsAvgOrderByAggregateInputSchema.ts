import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const transactionsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.transactionsAvgOrderByAggregateInput> = z
	.object({
		amount: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default transactionsAvgOrderByAggregateInputSchema;
