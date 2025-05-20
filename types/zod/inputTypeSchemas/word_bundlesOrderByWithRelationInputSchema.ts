import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { wordsOrderByRelationAggregateInputSchema } from './wordsOrderByRelationAggregateInputSchema';

export const word_bundlesOrderByWithRelationInputSchema: z.ZodType<Prisma.word_bundlesOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		words: z.lazy(() => wordsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default word_bundlesOrderByWithRelationInputSchema;
