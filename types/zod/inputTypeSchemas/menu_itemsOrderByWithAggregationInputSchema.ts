import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menu_itemsCountOrderByAggregateInputSchema } from './menu_itemsCountOrderByAggregateInputSchema';
import { menu_itemsAvgOrderByAggregateInputSchema } from './menu_itemsAvgOrderByAggregateInputSchema';
import { menu_itemsMaxOrderByAggregateInputSchema } from './menu_itemsMaxOrderByAggregateInputSchema';
import { menu_itemsMinOrderByAggregateInputSchema } from './menu_itemsMinOrderByAggregateInputSchema';
import { menu_itemsSumOrderByAggregateInputSchema } from './menu_itemsSumOrderByAggregateInputSchema';

export const menu_itemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.menu_itemsOrderByWithAggregationInput> = z
	.object({
		menu_item_id: z.lazy(() => SortOrderSchema).optional(),
		names: z.lazy(() => SortOrderSchema).optional(),
		image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		allergens: z.lazy(() => SortOrderSchema).optional(),
		spicy_level: z.lazy(() => SortOrderSchema).optional(),
		unit_size: z.lazy(() => SortOrderSchema).optional(),
		price: z.lazy(() => SortOrderSchema).optional(),
		discount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		sides: z.lazy(() => SortOrderSchema).optional(),
		extras: z.lazy(() => SortOrderSchema).optional(),
		ingredients: z.lazy(() => SortOrderSchema).optional(),
		availability: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		menu_category_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		daily_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		is_enabled: z.lazy(() => SortOrderSchema).optional(),
		menu_category_order_index: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		_count: z.lazy(() => menu_itemsCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => menu_itemsAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => menu_itemsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => menu_itemsMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => menu_itemsSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default menu_itemsOrderByWithAggregationInputSchema;
