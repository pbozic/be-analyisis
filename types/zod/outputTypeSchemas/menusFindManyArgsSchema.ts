import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusIncludeSchema } from '../inputTypeSchemas/menusIncludeSchema';
import { menusWhereInputSchema } from '../inputTypeSchemas/menusWhereInputSchema';
import { menusOrderByWithRelationInputSchema } from '../inputTypeSchemas/menusOrderByWithRelationInputSchema';
import { menusWhereUniqueInputSchema } from '../inputTypeSchemas/menusWhereUniqueInputSchema';
import { MenusScalarFieldEnumSchema } from '../inputTypeSchemas/MenusScalarFieldEnumSchema';
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

export const menusFindManyArgsSchema: z.ZodType<Prisma.menusFindManyArgs> = z
	.object({
		select: menusSelectSchema.optional(),
		include: menusIncludeSchema.optional(),
		where: menusWhereInputSchema.optional(),
		orderBy: z.union([menusOrderByWithRelationInputSchema.array(), menusOrderByWithRelationInputSchema]).optional(),
		cursor: menusWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([MenusScalarFieldEnumSchema, MenusScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default menusFindManyArgsSchema;
