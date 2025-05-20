import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusIncludeSchema } from '../inputTypeSchemas/menusIncludeSchema';
import { menusCreateInputSchema } from '../inputTypeSchemas/menusCreateInputSchema';
import { menusUncheckedCreateInputSchema } from '../inputTypeSchemas/menusUncheckedCreateInputSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { menu_categoriesFindManyArgsSchema } from '../outputTypeSchemas/menu_categoriesFindManyArgsSchema';
import { daily_meals_subscriptionsFindManyArgsSchema } from '../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema';
import { MenusCountOutputTypeArgsSchema } from '../outputTypeSchemas/MenusCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const menusSelectSchema: z.ZodType<Prisma.menusSelect> = z
	.object({
		menu_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		active: z.boolean().optional(),
		menu_categories_ordered: z.boolean().optional(),
		isDailyMeal: z.boolean().optional(),
		date: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		categories: z.union([z.boolean(), z.lazy(() => menu_categoriesFindManyArgsSchema)]).optional(),
		daily_meal_subscribers: z
			.union([z.boolean(), z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)])
			.optional(),
		_count: z.union([z.boolean(), z.lazy(() => MenusCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const menusCreateArgsSchema: z.ZodType<Prisma.menusCreateArgs> = z
	.object({
		select: menusSelectSchema.optional(),
		include: menusIncludeSchema.optional(),
		data: z.union([menusCreateInputSchema, menusUncheckedCreateInputSchema]),
	})
	.strict();

export default menusCreateArgsSchema;
