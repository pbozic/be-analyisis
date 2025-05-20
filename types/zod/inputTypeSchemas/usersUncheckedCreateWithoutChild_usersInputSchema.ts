import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { user_rolesUncheckedCreateNestedManyWithoutUserInputSchema } from './user_rolesUncheckedCreateNestedManyWithoutUserInputSchema';
import { user_addressUncheckedCreateNestedManyWithoutUsersInputSchema } from './user_addressUncheckedCreateNestedManyWithoutUsersInputSchema';
import { tokensUncheckedCreateNestedManyWithoutUsersInputSchema } from './tokensUncheckedCreateNestedManyWithoutUsersInputSchema';
import { business_usersUncheckedCreateNestedManyWithoutUsersInputSchema } from './business_usersUncheckedCreateNestedManyWithoutUsersInputSchema';
import { driversUncheckedCreateNestedOneWithoutUserInputSchema } from './driversUncheckedCreateNestedOneWithoutUserInputSchema';
import { taxi_ordersUncheckedCreateNestedManyWithoutUserInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutUserInputSchema';
import { documentsUncheckedCreateNestedManyWithoutUserInputSchema } from './documentsUncheckedCreateNestedManyWithoutUserInputSchema';
import { delivery_driversUncheckedCreateNestedOneWithoutUserInputSchema } from './delivery_driversUncheckedCreateNestedOneWithoutUserInputSchema';
import { delivery_ordersUncheckedCreateNestedManyWithoutUserInputSchema } from './delivery_ordersUncheckedCreateNestedManyWithoutUserInputSchema';
import { reviewsUncheckedCreateNestedManyWithoutAuthorInputSchema } from './reviewsUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { transactionsUncheckedCreateNestedManyWithoutUserInputSchema } from './transactionsUncheckedCreateNestedManyWithoutUserInputSchema';
import { reservationsUncheckedCreateNestedManyWithoutUserInputSchema } from './reservationsUncheckedCreateNestedManyWithoutUserInputSchema';
import { flag_historyUncheckedCreateNestedManyWithoutUserInputSchema } from './flag_historyUncheckedCreateNestedManyWithoutUserInputSchema';
import { lost_itemsUncheckedCreateNestedManyWithoutUserInputSchema } from './lost_itemsUncheckedCreateNestedManyWithoutUserInputSchema';
import { group_usersUncheckedCreateNestedOneWithoutChild_userInputSchema } from './group_usersUncheckedCreateNestedOneWithoutChild_userInputSchema';
import { wallet_fundsUncheckedCreateNestedManyWithoutUserInputSchema } from './wallet_fundsUncheckedCreateNestedManyWithoutUserInputSchema';
import { referralsUncheckedCreateNestedManyWithoutReferrerInputSchema } from './referralsUncheckedCreateNestedManyWithoutReferrerInputSchema';
import { referralsUncheckedCreateNestedOneWithoutReferredInputSchema } from './referralsUncheckedCreateNestedOneWithoutReferredInputSchema';
import { cashbackUncheckedCreateNestedManyWithoutUserInputSchema } from './cashbackUncheckedCreateNestedManyWithoutUserInputSchema';
import { order_lobby_usersUncheckedCreateNestedManyWithoutUsersInputSchema } from './order_lobby_usersUncheckedCreateNestedManyWithoutUsersInputSchema';
import { promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInputSchema } from './promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInputSchema';
import { user_favorite_businessesUncheckedCreateNestedManyWithoutUsersInputSchema } from './user_favorite_businessesUncheckedCreateNestedManyWithoutUsersInputSchema';
import { scoring_pointsUncheckedCreateNestedManyWithoutUsersInputSchema } from './scoring_pointsUncheckedCreateNestedManyWithoutUsersInputSchema';
import { daily_meals_subscriptionsUncheckedCreateNestedManyWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedCreateNestedManyWithoutUserInputSchema';
import { late_eventsUncheckedCreateNestedManyWithoutUsersInputSchema } from './late_eventsUncheckedCreateNestedManyWithoutUsersInputSchema';
import { account_actionsUncheckedCreateNestedManyWithoutUserInputSchema } from './account_actionsUncheckedCreateNestedManyWithoutUserInputSchema';
import { account_actionsUncheckedCreateNestedManyWithoutAction_creatorInputSchema } from './account_actionsUncheckedCreateNestedManyWithoutAction_creatorInputSchema';

export const usersUncheckedCreateWithoutChild_usersInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutChild_usersInput> =
	z
		.object({
			user_id: z.string().uuid().optional(),
			first_name: z.string().optional().nullable(),
			last_name: z.string().optional().nullable(),
			password: z.string(),
			gender: z
				.lazy(() => GENDERSchema)
				.optional()
				.nullable(),
			email: z.string().optional().nullable(),
			telephone: z.string(),
			telephone_code: z.string(),
			telephone_number: z.string(),
			date_of_birth: z.coerce.date(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			user_role: z.lazy(() => USER_ROLESSchema).optional(),
			phone_verified: z.boolean().optional(),
			notification_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			taxi_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			reviewable_id: z.string().optional().nullable(),
			review_complete: z.boolean().optional(),
			one_signal_id: z.string().optional().nullable(),
			stripe_customer_id: z.string().optional().nullable(),
			wallet_balance: z.number().optional(),
			transfer_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			allergies_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			spicy_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			radio_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			subscribed_to_daily_meals: z.boolean().optional(),
			daily_meal_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			details: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			taxi_push_notification_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			transfer_push_notification_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			delivery_push_notification_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			spoken_languages: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			daily_meal_day_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			disabled: z.boolean().optional(),
			active: z.boolean().optional(),
			language: z.string().optional().nullable(),
			apple_id: z.string().optional().nullable(),
			google_id: z.string().optional().nullable(),
			referral_code: z.string().optional().nullable(),
			activated_at: z.coerce.date().optional().nullable(),
			business_teams_id: z.string().optional().nullable(),
			allow_marketing_push_notifications: z.boolean().optional().nullable(),
			allow_ads_personalization: z.boolean().optional().nullable(),
			allow_newsletter: z.boolean().optional().nullable(),
			user_roles: z.lazy(() => user_rolesUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			addresses: z.lazy(() => user_addressUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			tokens: z.lazy(() => tokensUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			business_users: z.lazy(() => business_usersUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			driver: z.lazy(() => driversUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
			orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			documents: z.lazy(() => documentsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			delivery_driver: z.lazy(() => delivery_driversUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
			delivery_orders: z.lazy(() => delivery_ordersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			reviews: z.lazy(() => reviewsUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
			transactions: z.lazy(() => transactionsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			reservations: z.lazy(() => reservationsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			flag_changes: z.lazy(() => flag_historyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			lost_items: z.lazy(() => lost_itemsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			parent_user: z.lazy(() => group_usersUncheckedCreateNestedOneWithoutChild_userInputSchema).optional(),
			wallet_funds: z.lazy(() => wallet_fundsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			referrals_made: z.lazy(() => referralsUncheckedCreateNestedManyWithoutReferrerInputSchema).optional(),
			referral: z.lazy(() => referralsUncheckedCreateNestedOneWithoutReferredInputSchema).optional(),
			cashback: z.lazy(() => cashbackUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			order_lobby_users: z
				.lazy(() => order_lobby_usersUncheckedCreateNestedManyWithoutUsersInputSchema)
				.optional(),
			promo_section_buys: z
				.lazy(() => promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInputSchema)
				.optional(),
			user_favorite_businesses: z
				.lazy(() => user_favorite_businessesUncheckedCreateNestedManyWithoutUsersInputSchema)
				.optional(),
			scoring_points: z.lazy(() => scoring_pointsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			daily_meals_subscriptions: z
				.lazy(() => daily_meals_subscriptionsUncheckedCreateNestedManyWithoutUserInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			account_actions: z.lazy(() => account_actionsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			created_account_actions: z
				.lazy(() => account_actionsUncheckedCreateNestedManyWithoutAction_creatorInputSchema)
				.optional(),
		})
		.strict();

export default usersUncheckedCreateWithoutChild_usersInputSchema;
