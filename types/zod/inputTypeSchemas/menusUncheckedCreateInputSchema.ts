import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInputSchema';

export const menusUncheckedCreateInputSchema: z.ZodType<Prisma.menusUncheckedCreateInput> = z
	.object({
		menu_id: z.string().uuid().optional(),
		business_id: z.string(),
		active: z.boolean().optional(),
		menu_categories_ordered: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		isDailyMeal: z.boolean().optional(),
		date: z.coerce.date().optional().nullable(),
		categories: z.lazy(() => menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema).optional(),
		daily_meal_subscribers: z
			.lazy(() => daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenuInputSchema)
			.optional(),
	})
	.strict();

export default menusUncheckedCreateInputSchema;
