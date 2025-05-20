import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_fundsSumOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_fundsSumOrderByAggregateInput> = z
	.object({
		amount: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default wallet_fundsSumOrderByAggregateInputSchema;
