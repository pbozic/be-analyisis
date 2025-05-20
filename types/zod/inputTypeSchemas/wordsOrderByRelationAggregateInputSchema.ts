import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wordsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.wordsOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default wordsOrderByRelationAggregateInputSchema;
