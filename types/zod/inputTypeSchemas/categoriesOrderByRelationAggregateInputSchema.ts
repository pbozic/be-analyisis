import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const categoriesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.categoriesOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default categoriesOrderByRelationAggregateInputSchema;
