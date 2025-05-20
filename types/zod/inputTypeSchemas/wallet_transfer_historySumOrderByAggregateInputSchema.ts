import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_transfer_historySumOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_transfer_historySumOrderByAggregateInput> =
	z
		.object({
			amount: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default wallet_transfer_historySumOrderByAggregateInputSchema;
