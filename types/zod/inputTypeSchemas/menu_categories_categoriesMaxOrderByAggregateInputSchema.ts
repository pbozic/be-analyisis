import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categories_categoriesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.menu_categories_categoriesMaxOrderByAggregateInput> =
	z
		.object({
			menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
			categories_id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default menu_categories_categoriesMaxOrderByAggregateInputSchema;
