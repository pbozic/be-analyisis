import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const cashbackAvgOrderByAggregateInputSchema: z.ZodType<Prisma.cashbackAvgOrderByAggregateInput> = z
	.object({
		amount: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default cashbackAvgOrderByAggregateInputSchema;
