import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menu_categoriesCountOrderByAggregateInputSchema } from './menu_categoriesCountOrderByAggregateInputSchema';
import { menu_categoriesAvgOrderByAggregateInputSchema } from './menu_categoriesAvgOrderByAggregateInputSchema';
import { menu_categoriesMaxOrderByAggregateInputSchema } from './menu_categoriesMaxOrderByAggregateInputSchema';
import { menu_categoriesMinOrderByAggregateInputSchema } from './menu_categoriesMinOrderByAggregateInputSchema';
import { menu_categoriesSumOrderByAggregateInputSchema } from './menu_categoriesSumOrderByAggregateInputSchema';

export const menu_categoriesOrderByWithAggregationInputSchema: z.ZodType<Prisma.menu_categoriesOrderByWithAggregationInput> =
	z
		.object({
			menu_category_id: z.lazy(() => SortOrderSchema).optional(),
			names: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			categories: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			menu_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			order: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			menu_items_ordered: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			menu_order_index: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			_count: z.lazy(() => menu_categoriesCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => menu_categoriesAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => menu_categoriesMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => menu_categoriesMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => menu_categoriesSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default menu_categoriesOrderByWithAggregationInputSchema;
