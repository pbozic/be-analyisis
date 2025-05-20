import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const documentsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.documentsOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default documentsOrderByRelationAggregateInputSchema;
