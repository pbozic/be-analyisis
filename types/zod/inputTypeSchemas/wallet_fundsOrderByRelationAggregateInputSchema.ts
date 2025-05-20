import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_fundsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.wallet_fundsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default wallet_fundsOrderByRelationAggregateInputSchema;
