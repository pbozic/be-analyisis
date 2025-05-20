import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { menu_categories_categoriesCountOrderByAggregateInputSchema } from './menu_categories_categoriesCountOrderByAggregateInputSchema';
import { menu_categories_categoriesMaxOrderByAggregateInputSchema } from './menu_categories_categoriesMaxOrderByAggregateInputSchema';
import { menu_categories_categoriesMinOrderByAggregateInputSchema } from './menu_categories_categoriesMinOrderByAggregateInputSchema';

export const menu_categories_categoriesOrderByWithAggregationInputSchema: z.ZodType<Prisma.menu_categories_categoriesOrderByWithAggregationInput> =
	z
		.object({
			menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
			categories_id: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => menu_categories_categoriesCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => menu_categories_categoriesMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => menu_categories_categoriesMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default menu_categories_categoriesOrderByWithAggregationInputSchema;
