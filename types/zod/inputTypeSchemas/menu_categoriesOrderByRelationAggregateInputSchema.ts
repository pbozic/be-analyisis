import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categoriesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.menu_categoriesOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default menu_categoriesOrderByRelationAggregateInputSchema;
