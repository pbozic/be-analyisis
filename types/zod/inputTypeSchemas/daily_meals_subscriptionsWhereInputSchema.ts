import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { Menu_categoriesRelationFilterSchema } from './Menu_categoriesRelationFilterSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { MenusRelationFilterSchema } from './MenusRelationFilterSchema';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { AddressesRelationFilterSchema } from './AddressesRelationFilterSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const daily_meals_subscriptionsWhereInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => daily_meals_subscriptionsWhereInputSchema),
				z.lazy(() => daily_meals_subscriptionsWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => daily_meals_subscriptionsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => daily_meals_subscriptionsWhereInputSchema),
				z.lazy(() => daily_meals_subscriptionsWhereInputSchema).array(),
			])
			.optional(),
		daily_meals_subscriptions_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		grouped_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		menu_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		address_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		menu_categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		order_created: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		restaurant_comment: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		courier_comment: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		menu_category: z
			.union([z.lazy(() => Menu_categoriesRelationFilterSchema), z.lazy(() => menu_categoriesWhereInputSchema)])
			.optional(),
		user: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
		business: z
			.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
			.optional(),
		menu: z.union([z.lazy(() => MenusRelationFilterSchema), z.lazy(() => menusWhereInputSchema)]).optional(),
		address: z
			.union([z.lazy(() => AddressesRelationFilterSchema), z.lazy(() => addressesWhereInputSchema)])
			.optional(),
	})
	.strict();

export default daily_meals_subscriptionsWhereInputSchema;
