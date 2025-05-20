import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const filesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.filesOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default filesOrderByRelationAggregateInputSchema;
