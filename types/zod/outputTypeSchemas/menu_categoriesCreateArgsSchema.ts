import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesIncludeSchema } from '../inputTypeSchemas/menu_categoriesIncludeSchema';
import { menu_categoriesCreateInputSchema } from '../inputTypeSchemas/menu_categoriesCreateInputSchema';
import { menu_categoriesUncheckedCreateInputSchema } from '../inputTypeSchemas/menu_categoriesUncheckedCreateInputSchema';
import { menu_itemsFindManyArgsSchema } from '../outputTypeSchemas/menu_itemsFindManyArgsSchema';
import { menusArgsSchema } from '../outputTypeSchemas/menusArgsSchema';
import { menu_categories_categoriesFindManyArgsSchema } from '../outputTypeSchemas/menu_categories_categoriesFindManyArgsSchema';
import { daily_meals_subscriptionsFindManyArgsSchema } from '../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema';
import { Menu_categoriesCountOutputTypeArgsSchema } from '../outputTypeSchemas/Menu_categoriesCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const menu_categoriesSelectSchema: z.ZodType<Prisma.menu_categoriesSelect> = z
	.object({
		menu_category_id: z.boolean().optional(),
		names: z.boolean().optional(),
		description: z.boolean().optional(),
		categories: z.boolean().optional(),
		business_id: z.boolean().optional(),
		menu_id: z.boolean().optional(),
		order: z.boolean().optional(),
		price: z.boolean().optional(),
		menu_items_ordered: z.boolean().optional(),
		menu_order_index: z.boolean().optional(),
		menu_items: z.union([z.boolean(), z.lazy(() => menu_itemsFindManyArgsSchema)]).optional(),
		menu: z.union([z.boolean(), z.lazy(() => menusArgsSchema)]).optional(),
		menu_categories_categories: z
			.union([z.boolean(), z.lazy(() => menu_categories_categoriesFindManyArgsSchema)])
			.optional(),
		daily_meal_subscribers: z
			.union([z.boolean(), z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)])
			.optional(),
		_count: z.union([z.boolean(), z.lazy(() => Menu_categoriesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const menu_categoriesCreateArgsSchema: z.ZodType<Prisma.menu_categoriesCreateArgs> = z
	.object({
		select: menu_categoriesSelectSchema.optional(),
		include: menu_categoriesIncludeSchema.optional(),
		data: z.union([menu_categoriesCreateInputSchema, menu_categoriesUncheckedCreateInputSchema]),
	})
	.strict();

export default menu_categoriesCreateArgsSchema;
