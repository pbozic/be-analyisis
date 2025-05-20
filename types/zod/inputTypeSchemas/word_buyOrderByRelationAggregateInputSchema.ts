import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const word_buyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.word_buyOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default word_buyOrderByRelationAggregateInputSchema;
