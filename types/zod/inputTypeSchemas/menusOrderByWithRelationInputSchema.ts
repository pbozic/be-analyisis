import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { menu_categoriesOrderByRelationAggregateInputSchema } from './menu_categoriesOrderByRelationAggregateInputSchema';
import { daily_meals_subscriptionsOrderByRelationAggregateInputSchema } from './daily_meals_subscriptionsOrderByRelationAggregateInputSchema';

export const menusOrderByWithRelationInputSchema: z.ZodType<Prisma.menusOrderByWithRelationInput> = z
	.object({
		menu_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		menu_categories_ordered: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		isDailyMeal: z.lazy(() => SortOrderSchema).optional(),
		date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
		categories: z.lazy(() => menu_categoriesOrderByRelationAggregateInputSchema).optional(),
		daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default menusOrderByWithRelationInputSchema;
