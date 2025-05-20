import { z } from 'zod';
import { menu_categoriesWithRelationsSchema } from './menu_categoriesSchema';
import type { menu_categoriesWithRelations } from './menu_categoriesSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { menusWithRelationsSchema } from './menusSchema';
import type { menusWithRelations } from './menusSchema';
import { addressesWithRelationsSchema } from './addressesSchema';
import type { addressesWithRelations } from './addressesSchema';

/////////////////////////////////////////
// DAILY MEALS SUBSCRIPTIONS SCHEMA
/////////////////////////////////////////

export const daily_meals_subscriptionsSchema = z.object({
	daily_meals_subscriptions_id: z.string().uuid(),
	grouped_id: z.string(),
	user_id: z.string(),
	business_id: z.string(),
	menu_id: z.string(),
	address_id: z.string(),
	menu_categories_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	date: z.coerce.date(),
	quantity: z.number().int(),
	order_created: z.coerce.date().nullable(),
	restaurant_comment: z.string().nullable(),
	courier_comment: z.string().nullable(),
});

export type daily_meals_subscriptions = z.infer<typeof daily_meals_subscriptionsSchema>;

/////////////////////////////////////////
// DAILY MEALS SUBSCRIPTIONS RELATION SCHEMA
/////////////////////////////////////////

export type daily_meals_subscriptionsRelations = {
	menu_category: menu_categoriesWithRelations;
	user: usersWithRelations;
	business: businessWithRelations;
	menu: menusWithRelations;
	address: addressesWithRelations;
};

export type daily_meals_subscriptionsWithRelations = z.infer<typeof daily_meals_subscriptionsSchema> &
	daily_meals_subscriptionsRelations;

export const daily_meals_subscriptionsWithRelationsSchema: z.ZodType<daily_meals_subscriptionsWithRelations> =
	daily_meals_subscriptionsSchema.merge(
		z.object({
			menu_category: z.lazy(() => menu_categoriesWithRelationsSchema),
			user: z.lazy(() => usersWithRelationsSchema),
			business: z.lazy(() => businessWithRelationsSchema),
			menu: z.lazy(() => menusWithRelationsSchema),
			address: z.lazy(() => addressesWithRelationsSchema),
		})
	);

export default daily_meals_subscriptionsSchema;
