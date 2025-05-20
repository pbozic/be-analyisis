import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categories_categoriesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.menu_categories_categoriesOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default menu_categories_categoriesOrderByRelationAggregateInputSchema;
