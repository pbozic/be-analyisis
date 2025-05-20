import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { Menu_categoriesListRelationFilterSchema } from './Menu_categoriesListRelationFilterSchema';
import { Daily_meals_subscriptionsListRelationFilterSchema } from './Daily_meals_subscriptionsListRelationFilterSchema';

export const menusWhereUniqueInputSchema: z.ZodType<Prisma.menusWhereUniqueInput> = z
	.object({
		menu_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				menu_id: z.string().uuid().optional(),
				AND: z
					.union([z.lazy(() => menusWhereInputSchema), z.lazy(() => menusWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => menusWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => menusWhereInputSchema), z.lazy(() => menusWhereInputSchema).array()])
					.optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				menu_categories_ordered: z.lazy(() => JsonNullableFilterSchema).optional(),
				isDailyMeal: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				date: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				business: z
					.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional(),
				categories: z.lazy(() => Menu_categoriesListRelationFilterSchema).optional(),
				daily_meal_subscribers: z.lazy(() => Daily_meals_subscriptionsListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default menusWhereUniqueInputSchema;
