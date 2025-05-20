import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menu_itemsOrderByRelationAggregateInputSchema } from './menu_itemsOrderByRelationAggregateInputSchema';
import { menusOrderByWithRelationInputSchema } from './menusOrderByWithRelationInputSchema';
import { menu_categories_categoriesOrderByRelationAggregateInputSchema } from './menu_categories_categoriesOrderByRelationAggregateInputSchema';
import { daily_meals_subscriptionsOrderByRelationAggregateInputSchema } from './daily_meals_subscriptionsOrderByRelationAggregateInputSchema';

export const menu_categoriesOrderByWithRelationInputSchema: z.ZodType<Prisma.menu_categoriesOrderByWithRelationInput> =
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
			menu_items: z.lazy(() => menu_itemsOrderByRelationAggregateInputSchema).optional(),
			menu: z.lazy(() => menusOrderByWithRelationInputSchema).optional(),
			menu_categories_categories: z
				.lazy(() => menu_categories_categoriesOrderByRelationAggregateInputSchema)
				.optional(),
			daily_meal_subscribers: z
				.lazy(() => daily_meals_subscriptionsOrderByRelationAggregateInputSchema)
				.optional(),
		})
		.strict();

export default menu_categoriesOrderByWithRelationInputSchema;
