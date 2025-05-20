import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_transfer_historyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.wallet_transfer_historyOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default wallet_transfer_historyOrderByRelationAggregateInputSchema;
