import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_itemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.menu_itemsMinOrderByAggregateInput> = z
	.object({
		menu_item_id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		spicy_level: z.lazy(() => SortOrderSchema).optional(),
		unit_size: z.lazy(() => SortOrderSchema).optional(),
		price: z.lazy(() => SortOrderSchema).optional(),
		discount: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		menu_category_id: z.lazy(() => SortOrderSchema).optional(),
		daily_date: z.lazy(() => SortOrderSchema).optional(),
		is_enabled: z.lazy(() => SortOrderSchema).optional(),
		menu_category_order_index: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default menu_itemsMinOrderByAggregateInputSchema;
