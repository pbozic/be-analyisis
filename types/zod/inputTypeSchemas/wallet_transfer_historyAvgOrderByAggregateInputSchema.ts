import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_transfer_historyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_transfer_historyAvgOrderByAggregateInput> =
	z
		.object({
			amount: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default wallet_transfer_historyAvgOrderByAggregateInputSchema;
