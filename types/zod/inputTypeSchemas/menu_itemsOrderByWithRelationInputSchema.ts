import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menu_categoriesOrderByWithRelationInputSchema } from './menu_categoriesOrderByWithRelationInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';

export const menu_itemsOrderByWithRelationInputSchema: z.ZodType<Prisma.menu_itemsOrderByWithRelationInput> = z
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
		menu_category: z.lazy(() => menu_categoriesOrderByWithRelationInputSchema).optional(),
		documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default menu_itemsOrderByWithRelationInputSchema;
