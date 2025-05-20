import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menusOrderByRelationAggregateInputSchema: z.ZodType<Prisma.menusOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default menusOrderByRelationAggregateInputSchema;
