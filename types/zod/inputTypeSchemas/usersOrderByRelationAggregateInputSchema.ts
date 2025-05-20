import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const usersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.usersOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default usersOrderByRelationAggregateInputSchema;
