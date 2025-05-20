import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { BUSINESS_TYPESchema } from '../inputTypeSchemas/BUSINESS_TYPESchema';
import { SORTING_TYPESchema } from '../inputTypeSchemas/SORTING_TYPESchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { addressesWithRelationsSchema } from './addressesSchema';
import type { addressesWithRelations } from './addressesSchema';
import { financesWithRelationsSchema } from './financesSchema';
import type { financesWithRelations } from './financesSchema';
import { business_usersWithRelationsSchema } from './business_usersSchema';
import type { business_usersWithRelations } from './business_usersSchema';
import { documentsWithRelationsSchema } from './documentsSchema';
import type { documentsWithRelations } from './documentsSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';
import { menusWithRelationsSchema } from './menusSchema';
import type { menusWithRelations } from './menusSchema';
import { reviewableWithRelationsSchema } from './reviewableSchema';
import type { reviewableWithRelations } from './reviewableSchema';
import { local_productsWithRelationsSchema } from './local_productsSchema';
import type { local_productsWithRelations } from './local_productsSchema';
import { word_buyWithRelationsSchema } from './word_buySchema';
import type { word_buyWithRelations } from './word_buySchema';
import { reservationsWithRelationsSchema } from './reservationsSchema';
import type { reservationsWithRelations } from './reservationsSchema';
import { promo_sections_buyWithRelationsSchema } from './promo_sections_buySchema';
import type { promo_sections_buyWithRelations } from './promo_sections_buySchema';
import { business_teamsWithRelationsSchema } from './business_teamsSchema';
import type { business_teamsWithRelations } from './business_teamsSchema';
import { order_lobbiesWithRelationsSchema } from './order_lobbiesSchema';
import type { order_lobbiesWithRelations } from './order_lobbiesSchema';
import { user_favorite_businessesWithRelationsSchema } from './user_favorite_businessesSchema';
import type { user_favorite_businessesWithRelations } from './user_favorite_businessesSchema';
import { scoring_pointsWithRelationsSchema } from './scoring_pointsSchema';
import type { scoring_pointsWithRelations } from './scoring_pointsSchema';
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema';
import type { delivery_driversWithRelations } from './delivery_driversSchema';
import { late_eventsWithRelationsSchema } from './late_eventsSchema';
import type { late_eventsWithRelations } from './late_eventsSchema';
import { fiscal_devicesWithRelationsSchema } from './fiscal_devicesSchema';
import type { fiscal_devicesWithRelations } from './fiscal_devicesSchema';
import { daily_meals_subscriptionsWithRelationsSchema } from './daily_meals_subscriptionsSchema';
import type { daily_meals_subscriptionsWithRelations } from './daily_meals_subscriptionsSchema';
import { account_actionsWithRelationsSchema } from './account_actionsSchema';
import type { account_actionsWithRelations } from './account_actionsSchema';
import { business_clientsWithRelationsSchema } from './business_clientsSchema';
import type { business_clientsWithRelations } from './business_clientsSchema';

/////////////////////////////////////////
// BUSINESS SCHEMA
/////////////////////////////////////////

export const businessSchema = z.object({
	type: BUSINESS_TYPESchema,
	daily_users_sorting_type: SORTING_TYPESchema,
	business_id: z.string().uuid(),
	address_id: z.string().nullable(),
	delivery_address_id: z.string().nullable(),
	finance_id: z.string().nullable(),
	is_business_unit: z.boolean(),
	business_group_name: z.string().nullable(),
	name: z.string(),
	description: z.string().nullable(),
	tax_id: z.string(),
	registration_id: z.string(),
	email: z.string(),
	telephone: z.string().nullable(),
	telephone_code: z.string(),
	telephone_number: z.string(),
	website_url: z.string().nullable(),
	working_hours: JsonValueSchema.nullable(),
	seats: z.number().int().nullable(),
	minimum_order: z.number().int(),
	offers_daily_meals: z.boolean(),
	offers_daily_meals_on_weekend: z.boolean(),
	popular: z.boolean(),
	new: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	parent_business_id: z.string().nullable(),
	reviewable_id: z.string().nullable(),
	stripe_account_id: z.string().nullable(),
	stripe_customer_id: z.string().nullable(),
	word_buy_stripe_product_id: z.string().nullable(),
	word_buy_stripe_subscription_id: z.string().nullable(),
	daily_users_sorted: JsonValueSchema.nullable(),
	restaurant_overwhelmed: z.boolean(),
	first_activated_at: z.coerce.date().nullable(),
	active: z.boolean(),
	sales_representative_id: z.string().nullable(),
	fiscal_devices_id: z.string().nullable(),
	purchase_order_limit_amount: z.number().nullable(),
});

export type business = z.infer<typeof businessSchema>;

/////////////////////////////////////////
// BUSINESS RELATION SCHEMA
/////////////////////////////////////////

export type businessRelations = {
	address?: addressesWithRelations | null;
	delivery_address?: addressesWithRelations | null;
	finances?: financesWithRelations | null;
	business_users: business_usersWithRelations[];
	documents: documentsWithRelations[];
	parent_business?: businessWithRelations | null;
	child_businesses: businessWithRelations[];
	taxi_orders: taxi_ordersWithRelations[];
	delivery_orders: delivery_ordersWithRelations[];
	menus: menusWithRelations[];
	reviewable?: reviewableWithRelations | null;
	word_buy_stripe_product?: local_productsWithRelations | null;
	word_buys: word_buyWithRelations[];
	reservations: reservationsWithRelations[];
	promo_sections: promo_sections_buyWithRelations[];
	business_teams: business_teamsWithRelations[];
	business_order_lobbies: order_lobbiesWithRelations[];
	user_favorite_businesses: user_favorite_businessesWithRelations[];
	scoring_points: scoring_pointsWithRelations[];
	daily_meal_drivers: delivery_driversWithRelations[];
	late_events: late_eventsWithRelations[];
	fiscal_device?: fiscal_devicesWithRelations | null;
	daily_meals_subscribers: daily_meals_subscriptionsWithRelations[];
	account_actions: account_actionsWithRelations[];
	business_clients: business_clientsWithRelations[];
};

export type businessWithRelations = Omit<z.infer<typeof businessSchema>, 'working_hours' | 'daily_users_sorted'> & {
	working_hours?: JsonValueType | null;
	daily_users_sorted?: JsonValueType | null;
} & businessRelations;

export const businessWithRelationsSchema: z.ZodType<businessWithRelations> = businessSchema.merge(
	z.object({
		address: z.lazy(() => addressesWithRelationsSchema).nullable(),
		delivery_address: z.lazy(() => addressesWithRelationsSchema).nullable(),
		finances: z.lazy(() => financesWithRelationsSchema).nullable(),
		business_users: z.lazy(() => business_usersWithRelationsSchema).array(),
		documents: z.lazy(() => documentsWithRelationsSchema).array(),
		parent_business: z.lazy(() => businessWithRelationsSchema).nullable(),
		child_businesses: z.lazy(() => businessWithRelationsSchema).array(),
		taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
		delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).array(),
		menus: z.lazy(() => menusWithRelationsSchema).array(),
		reviewable: z.lazy(() => reviewableWithRelationsSchema).nullable(),
		word_buy_stripe_product: z.lazy(() => local_productsWithRelationsSchema).nullable(),
		word_buys: z.lazy(() => word_buyWithRelationsSchema).array(),
		reservations: z.lazy(() => reservationsWithRelationsSchema).array(),
		promo_sections: z.lazy(() => promo_sections_buyWithRelationsSchema).array(),
		business_teams: z.lazy(() => business_teamsWithRelationsSchema).array(),
		business_order_lobbies: z.lazy(() => order_lobbiesWithRelationsSchema).array(),
		user_favorite_businesses: z.lazy(() => user_favorite_businessesWithRelationsSchema).array(),
		scoring_points: z.lazy(() => scoring_pointsWithRelationsSchema).array(),
		daily_meal_drivers: z.lazy(() => delivery_driversWithRelationsSchema).array(),
		late_events: z.lazy(() => late_eventsWithRelationsSchema).array(),
		fiscal_device: z.lazy(() => fiscal_devicesWithRelationsSchema).nullable(),
		daily_meals_subscribers: z.lazy(() => daily_meals_subscriptionsWithRelationsSchema).array(),
		account_actions: z.lazy(() => account_actionsWithRelationsSchema).array(),
		business_clients: z.lazy(() => business_clientsWithRelationsSchema).array(),
	})
);

export default businessSchema;
