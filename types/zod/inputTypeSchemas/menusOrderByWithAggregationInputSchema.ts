import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menusCountOrderByAggregateInputSchema } from './menusCountOrderByAggregateInputSchema';
import { menusMaxOrderByAggregateInputSchema } from './menusMaxOrderByAggregateInputSchema';
import { menusMinOrderByAggregateInputSchema } from './menusMinOrderByAggregateInputSchema';

export const menusOrderByWithAggregationInputSchema: z.ZodType<Prisma.menusOrderByWithAggregationInput> = z
	.object({
		menu_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		menu_categories_ordered: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		isDailyMeal: z.lazy(() => SortOrderSchema).optional(),
		date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => menusCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => menusMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => menusMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default menusOrderByWithAggregationInputSchema;
