import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsIncludeSchema } from '../inputTypeSchemas/daily_meals_subscriptionsIncludeSchema';
import { daily_meals_subscriptionsWhereInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereInputSchema';
import { daily_meals_subscriptionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsOrderByWithRelationInputSchema';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereUniqueInputSchema';
import { Daily_meals_subscriptionsScalarFieldEnumSchema } from '../inputTypeSchemas/Daily_meals_subscriptionsScalarFieldEnumSchema';
import { menu_categoriesArgsSchema } from '../outputTypeSchemas/menu_categoriesArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { menusArgsSchema } from '../outputTypeSchemas/menusArgsSchema';
import { addressesArgsSchema } from '../outputTypeSchemas/addressesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const daily_meals_subscriptionsSelectSchema: z.ZodType<Prisma.daily_meals_subscriptionsSelect> = z
	.object({
		daily_meals_subscriptions_id: z.boolean().optional(),
		grouped_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		menu_id: z.boolean().optional(),
		address_id: z.boolean().optional(),
		menu_categories_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		date: z.boolean().optional(),
		quantity: z.boolean().optional(),
		order_created: z.boolean().optional(),
		restaurant_comment: z.boolean().optional(),
		courier_comment: z.boolean().optional(),
		menu_category: z.union([z.boolean(), z.lazy(() => menu_categoriesArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		menu: z.union([z.boolean(), z.lazy(() => menusArgsSchema)]).optional(),
		address: z.union([z.boolean(), z.lazy(() => addressesArgsSchema)]).optional(),
	})
	.strict();

export const daily_meals_subscriptionsFindManyArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsFindManyArgs> = z
	.object({
		select: daily_meals_subscriptionsSelectSchema.optional(),
		include: daily_meals_subscriptionsIncludeSchema.optional(),
		where: daily_meals_subscriptionsWhereInputSchema.optional(),
		orderBy: z
			.union([
				daily_meals_subscriptionsOrderByWithRelationInputSchema.array(),
				daily_meals_subscriptionsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: daily_meals_subscriptionsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				Daily_meals_subscriptionsScalarFieldEnumSchema,
				Daily_meals_subscriptionsScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();

export default daily_meals_subscriptionsFindManyArgsSchema;
