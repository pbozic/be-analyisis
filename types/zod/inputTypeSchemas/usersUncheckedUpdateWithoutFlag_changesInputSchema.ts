import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { GENDERSchema } from './GENDERSchema';
import { NullableEnumGENDERFieldUpdateOperationsInputSchema } from './NullableEnumGENDERFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { EnumUSER_ROLESFieldUpdateOperationsInputSchema } from './EnumUSER_ROLESFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { user_rolesUncheckedUpdateManyWithoutUserNestedInputSchema } from './user_rolesUncheckedUpdateManyWithoutUserNestedInputSchema';
import { user_addressUncheckedUpdateManyWithoutUsersNestedInputSchema } from './user_addressUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { tokensUncheckedUpdateManyWithoutUsersNestedInputSchema } from './tokensUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { business_usersUncheckedUpdateManyWithoutUsersNestedInputSchema } from './business_usersUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { driversUncheckedUpdateOneWithoutUserNestedInputSchema } from './driversUncheckedUpdateOneWithoutUserNestedInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutUserNestedInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutUserNestedInputSchema';
import { documentsUncheckedUpdateManyWithoutUserNestedInputSchema } from './documentsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { delivery_driversUncheckedUpdateOneWithoutUserNestedInputSchema } from './delivery_driversUncheckedUpdateOneWithoutUserNestedInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutUserNestedInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutUserNestedInputSchema';
import { reviewsUncheckedUpdateManyWithoutAuthorNestedInputSchema } from './reviewsUncheckedUpdateManyWithoutAuthorNestedInputSchema';
import { transactionsUncheckedUpdateManyWithoutUserNestedInputSchema } from './transactionsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { reservationsUncheckedUpdateManyWithoutUserNestedInputSchema } from './reservationsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { lost_itemsUncheckedUpdateManyWithoutUserNestedInputSchema } from './lost_itemsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { group_usersUncheckedUpdateManyWithoutParent_userNestedInputSchema } from './group_usersUncheckedUpdateManyWithoutParent_userNestedInputSchema';
import { group_usersUncheckedUpdateOneWithoutChild_userNestedInputSchema } from './group_usersUncheckedUpdateOneWithoutChild_userNestedInputSchema';
import { wallet_fundsUncheckedUpdateManyWithoutUserNestedInputSchema } from './wallet_fundsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { referralsUncheckedUpdateManyWithoutReferrerNestedInputSchema } from './referralsUncheckedUpdateManyWithoutReferrerNestedInputSchema';
import { referralsUncheckedUpdateOneWithoutReferredNestedInputSchema } from './referralsUncheckedUpdateOneWithoutReferredNestedInputSchema';
import { cashbackUncheckedUpdateManyWithoutUserNestedInputSchema } from './cashbackUncheckedUpdateManyWithoutUserNestedInputSchema';
import { order_lobby_usersUncheckedUpdateManyWithoutUsersNestedInputSchema } from './order_lobby_usersUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInputSchema } from './promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInputSchema';
import { user_favorite_businessesUncheckedUpdateManyWithoutUsersNestedInputSchema } from './user_favorite_businessesUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutUsersNestedInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { late_eventsUncheckedUpdateManyWithoutUsersNestedInputSchema } from './late_eventsUncheckedUpdateManyWithoutUsersNestedInputSchema';
import { account_actionsUncheckedUpdateManyWithoutUserNestedInputSchema } from './account_actionsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInputSchema } from './account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInputSchema';

export const usersUncheckedUpdateWithoutFlag_changesInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutFlag_changesInput> =
	z
		.object({
			user_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			first_name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			last_name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			gender: z
				.union([z.lazy(() => GENDERSchema), z.lazy(() => NullableEnumGENDERFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			email: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			telephone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			telephone_code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			telephone_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			date_of_birth: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			user_role: z
				.union([z.lazy(() => USER_ROLESSchema), z.lazy(() => EnumUSER_ROLESFieldUpdateOperationsInputSchema)])
				.optional(),
			phone_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			notification_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			taxi_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			reviewable_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			review_complete: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			one_signal_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			stripe_customer_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			wallet_balance: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
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
			subscribed_to_daily_meals: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
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
			disabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			language: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			apple_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			google_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			referral_code: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			activated_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			business_teams_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			allow_marketing_push_notifications: z
				.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			allow_ads_personalization: z
				.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			allow_newsletter: z
				.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			user_roles: z.lazy(() => user_rolesUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			addresses: z.lazy(() => user_addressUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			tokens: z.lazy(() => tokensUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			business_users: z.lazy(() => business_usersUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			driver: z.lazy(() => driversUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
			orders: z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			documents: z.lazy(() => documentsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			delivery_driver: z.lazy(() => delivery_driversUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
			delivery_orders: z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			reviews: z.lazy(() => reviewsUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
			transactions: z.lazy(() => transactionsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			reservations: z.lazy(() => reservationsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			lost_items: z.lazy(() => lost_itemsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			child_users: z.lazy(() => group_usersUncheckedUpdateManyWithoutParent_userNestedInputSchema).optional(),
			parent_user: z.lazy(() => group_usersUncheckedUpdateOneWithoutChild_userNestedInputSchema).optional(),
			wallet_funds: z.lazy(() => wallet_fundsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			referrals_made: z.lazy(() => referralsUncheckedUpdateManyWithoutReferrerNestedInputSchema).optional(),
			referral: z.lazy(() => referralsUncheckedUpdateOneWithoutReferredNestedInputSchema).optional(),
			cashback: z.lazy(() => cashbackUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			order_lobby_users: z
				.lazy(() => order_lobby_usersUncheckedUpdateManyWithoutUsersNestedInputSchema)
				.optional(),
			promo_section_buys: z
				.lazy(() => promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInputSchema)
				.optional(),
			user_favorite_businesses: z
				.lazy(() => user_favorite_businessesUncheckedUpdateManyWithoutUsersNestedInputSchema)
				.optional(),
			scoring_points: z.lazy(() => scoring_pointsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			daily_meals_subscriptions: z
				.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutUserNestedInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			account_actions: z.lazy(() => account_actionsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			created_account_actions: z
				.lazy(() => account_actionsUncheckedUpdateManyWithoutAction_creatorNestedInputSchema)
				.optional(),
		})
		.strict();

export default usersUncheckedUpdateWithoutFlag_changesInputSchema;
