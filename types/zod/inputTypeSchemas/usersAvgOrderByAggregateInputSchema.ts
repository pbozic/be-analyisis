import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const usersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.usersAvgOrderByAggregateInput> = z
	.object({
		wallet_balance: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default usersAvgOrderByAggregateInputSchema;
