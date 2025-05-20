import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const usersSumOrderByAggregateInputSchema: z.ZodType<Prisma.usersSumOrderByAggregateInput> = z
	.object({
		wallet_balance: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default usersSumOrderByAggregateInputSchema;
