import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { business_usersUncheckedCreateNestedManyWithoutBusinessInputSchema } from './business_usersUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { documentsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './documentsUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { businessUncheckedCreateNestedManyWithoutParent_businessInputSchema } from './businessUncheckedCreateNestedManyWithoutParent_businessInputSchema';
import { taxi_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { delivery_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema } from './delivery_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { menusUncheckedCreateNestedManyWithoutBusinessInputSchema } from './menusUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { local_productsUncheckedCreateNestedOneWithoutBusinessInputSchema } from './local_productsUncheckedCreateNestedOneWithoutBusinessInputSchema';
import { word_buyUncheckedCreateNestedManyWithoutBusinessInputSchema } from './word_buyUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { reservationsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './reservationsUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedCreateNestedManyWithoutBusinessInputSchema } from './promo_sections_buyUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { business_teamsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './business_teamsUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { order_lobbiesUncheckedCreateNestedManyWithoutBusinessInputSchema } from './order_lobbiesUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInputSchema } from './scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInputSchema';
import { delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInputSchema';
import { daily_meals_subscriptionsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { account_actionsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './account_actionsUncheckedCreateNestedManyWithoutBusinessInputSchema';
import { business_clientsUncheckedCreateNestedManyWithoutBusinessInputSchema } from './business_clientsUncheckedCreateNestedManyWithoutBusinessInputSchema';

export const businessUncheckedCreateWithoutLate_eventsInputSchema: z.ZodType<Prisma.businessUncheckedCreateWithoutLate_eventsInput> =
	z
		.object({
			business_id: z.string().uuid().optional(),
			address_id: z.string().optional().nullable(),
			delivery_address_id: z.string().optional().nullable(),
			finance_id: z.string().optional().nullable(),
			type: z.lazy(() => BUSINESS_TYPESchema),
			is_business_unit: z.boolean().optional(),
			business_group_name: z.string().optional().nullable(),
			name: z.string(),
			description: z.string().optional().nullable(),
			tax_id: z.string(),
			registration_id: z.string(),
			email: z.string(),
			telephone: z.string().optional().nullable(),
			telephone_code: z.string(),
			telephone_number: z.string(),
			website_url: z.string().optional().nullable(),
			working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			seats: z.number().int().optional().nullable(),
			minimum_order: z.number().int(),
			offers_daily_meals: z.boolean().optional(),
			offers_daily_meals_on_weekend: z.boolean().optional(),
			popular: z.boolean().optional(),
			new: z.boolean().optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			parent_business_id: z.string().optional().nullable(),
			reviewable_id: z.string().optional().nullable(),
			stripe_account_id: z.string().optional().nullable(),
			stripe_customer_id: z.string().optional().nullable(),
			word_buy_stripe_product_id: z.string().optional().nullable(),
			word_buy_stripe_subscription_id: z.string().optional().nullable(),
			daily_users_sorted: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			daily_users_sorting_type: z.lazy(() => SORTING_TYPESchema).optional(),
			restaurant_overwhelmed: z.boolean().optional(),
			first_activated_at: z.coerce.date().optional().nullable(),
			active: z.boolean().optional(),
			sales_representative_id: z.string().optional().nullable(),
			fiscal_devices_id: z.string().optional().nullable(),
			purchase_order_limit_amount: z.number().optional().nullable(),
			business_users: z.lazy(() => business_usersUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			documents: z.lazy(() => documentsUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			child_businesses: z
				.lazy(() => businessUncheckedCreateNestedManyWithoutParent_businessInputSchema)
				.optional(),
			taxi_orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			delivery_orders: z
				.lazy(() => delivery_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
			menus: z.lazy(() => menusUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			word_buy_stripe_product: z
				.lazy(() => local_productsUncheckedCreateNestedOneWithoutBusinessInputSchema)
				.optional(),
			word_buys: z.lazy(() => word_buyUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			reservations: z.lazy(() => reservationsUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			promo_sections: z
				.lazy(() => promo_sections_buyUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
			business_teams: z.lazy(() => business_teamsUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
			business_order_lobbies: z
				.lazy(() => order_lobbiesUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
			user_favorite_businesses: z
				.lazy(() => user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInputSchema)
				.optional(),
			scoring_points: z
				.lazy(() => scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInputSchema)
				.optional(),
			daily_meal_drivers: z
				.lazy(() => delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInputSchema)
				.optional(),
			daily_meals_subscribers: z
				.lazy(() => daily_meals_subscriptionsUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
			account_actions: z
				.lazy(() => account_actionsUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
			business_clients: z
				.lazy(() => business_clientsUncheckedCreateNestedManyWithoutBusinessInputSchema)
				.optional(),
		})
		.strict();

export default businessUncheckedCreateWithoutLate_eventsInputSchema;
