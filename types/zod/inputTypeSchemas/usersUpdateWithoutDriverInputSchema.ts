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
import { user_rolesUpdateManyWithoutUserNestedInputSchema } from './user_rolesUpdateManyWithoutUserNestedInputSchema';
import { user_addressUpdateManyWithoutUsersNestedInputSchema } from './user_addressUpdateManyWithoutUsersNestedInputSchema';
import { tokensUpdateManyWithoutUsersNestedInputSchema } from './tokensUpdateManyWithoutUsersNestedInputSchema';
import { business_usersUpdateManyWithoutUsersNestedInputSchema } from './business_usersUpdateManyWithoutUsersNestedInputSchema';
import { taxi_ordersUpdateManyWithoutUserNestedInputSchema } from './taxi_ordersUpdateManyWithoutUserNestedInputSchema';
import { documentsUpdateManyWithoutUserNestedInputSchema } from './documentsUpdateManyWithoutUserNestedInputSchema';
import { delivery_driversUpdateOneWithoutUserNestedInputSchema } from './delivery_driversUpdateOneWithoutUserNestedInputSchema';
import { delivery_ordersUpdateManyWithoutUserNestedInputSchema } from './delivery_ordersUpdateManyWithoutUserNestedInputSchema';
import { reviewableUpdateOneWithoutUserNestedInputSchema } from './reviewableUpdateOneWithoutUserNestedInputSchema';
import { reviewsUpdateManyWithoutAuthorNestedInputSchema } from './reviewsUpdateManyWithoutAuthorNestedInputSchema';
import { transactionsUpdateManyWithoutUserNestedInputSchema } from './transactionsUpdateManyWithoutUserNestedInputSchema';
import { reservationsUpdateManyWithoutUserNestedInputSchema } from './reservationsUpdateManyWithoutUserNestedInputSchema';
import { flag_historyUpdateManyWithoutUserNestedInputSchema } from './flag_historyUpdateManyWithoutUserNestedInputSchema';
import { lost_itemsUpdateManyWithoutUserNestedInputSchema } from './lost_itemsUpdateManyWithoutUserNestedInputSchema';
import { group_usersUpdateManyWithoutParent_userNestedInputSchema } from './group_usersUpdateManyWithoutParent_userNestedInputSchema';
import { group_usersUpdateOneWithoutChild_userNestedInputSchema } from './group_usersUpdateOneWithoutChild_userNestedInputSchema';
import { wallet_fundsUpdateManyWithoutUserNestedInputSchema } from './wallet_fundsUpdateManyWithoutUserNestedInputSchema';
import { referralsUpdateManyWithoutReferrerNestedInputSchema } from './referralsUpdateManyWithoutReferrerNestedInputSchema';
import { referralsUpdateOneWithoutReferredNestedInputSchema } from './referralsUpdateOneWithoutReferredNestedInputSchema';
import { cashbackUpdateManyWithoutUserNestedInputSchema } from './cashbackUpdateManyWithoutUserNestedInputSchema';
import { business_teamsUpdateOneWithoutUsersNestedInputSchema } from './business_teamsUpdateOneWithoutUsersNestedInputSchema';
import { order_lobby_usersUpdateManyWithoutUsersNestedInputSchema } from './order_lobby_usersUpdateManyWithoutUsersNestedInputSchema';
import { promo_sections_buyUpdateManyWithoutBought_byNestedInputSchema } from './promo_sections_buyUpdateManyWithoutBought_byNestedInputSchema';
import { user_favorite_businessesUpdateManyWithoutUsersNestedInputSchema } from './user_favorite_businessesUpdateManyWithoutUsersNestedInputSchema';
import { scoring_pointsUpdateManyWithoutUsersNestedInputSchema } from './scoring_pointsUpdateManyWithoutUsersNestedInputSchema';
import { daily_meals_subscriptionsUpdateManyWithoutUserNestedInputSchema } from './daily_meals_subscriptionsUpdateManyWithoutUserNestedInputSchema';
import { late_eventsUpdateManyWithoutUsersNestedInputSchema } from './late_eventsUpdateManyWithoutUsersNestedInputSchema';
import { account_actionsUpdateManyWithoutUserNestedInputSchema } from './account_actionsUpdateManyWithoutUserNestedInputSchema';
import { account_actionsUpdateManyWithoutAction_creatorNestedInputSchema } from './account_actionsUpdateManyWithoutAction_creatorNestedInputSchema';

export const usersUpdateWithoutDriverInputSchema: z.ZodType<Prisma.usersUpdateWithoutDriverInput> = z.object({
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GENDERSchema),z.lazy(() => NullableEnumGENDERFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telephone_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telephone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user_role: z.union([ z.lazy(() => USER_ROLESSchema),z.lazy(() => EnumUSER_ROLESFieldUpdateOperationsInputSchema) ]).optional(),
  phone_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  taxi_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  review_complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  one_signal_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stripe_customer_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wallet_balance: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  transfer_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allergies_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  spicy_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  radio_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  subscribed_to_daily_meals: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  daily_meal_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  details: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  taxi_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  transfer_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  spoken_languages: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  daily_meal_day_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  disabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  apple_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  google_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  referral_code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allow_marketing_push_notifications: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allow_ads_personalization: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allow_newsletter: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_roles: z.lazy(() => user_rolesUpdateManyWithoutUserNestedInputSchema).optional(),
  addresses: z.lazy(() => user_addressUpdateManyWithoutUsersNestedInputSchema).optional(),
  tokens: z.lazy(() => tokensUpdateManyWithoutUsersNestedInputSchema).optional(),
  business_users: z.lazy(() => business_usersUpdateManyWithoutUsersNestedInputSchema).optional(),
  orders: z.lazy(() => taxi_ordersUpdateManyWithoutUserNestedInputSchema).optional(),
  documents: z.lazy(() => documentsUpdateManyWithoutUserNestedInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversUpdateOneWithoutUserNestedInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersUpdateManyWithoutUserNestedInputSchema).optional(),
  reviewable: z.lazy(() => reviewableUpdateOneWithoutUserNestedInputSchema).optional(),
  reviews: z.lazy(() => reviewsUpdateManyWithoutAuthorNestedInputSchema).optional(),
  transactions: z.lazy(() => transactionsUpdateManyWithoutUserNestedInputSchema).optional(),
  reservations: z.lazy(() => reservationsUpdateManyWithoutUserNestedInputSchema).optional(),
  flag_changes: z.lazy(() => flag_historyUpdateManyWithoutUserNestedInputSchema).optional(),
  lost_items: z.lazy(() => lost_itemsUpdateManyWithoutUserNestedInputSchema).optional(),
  child_users: z.lazy(() => group_usersUpdateManyWithoutParent_userNestedInputSchema).optional(),
  parent_user: z.lazy(() => group_usersUpdateOneWithoutChild_userNestedInputSchema).optional(),
  wallet_funds: z.lazy(() => wallet_fundsUpdateManyWithoutUserNestedInputSchema).optional(),
  referrals_made: z.lazy(() => referralsUpdateManyWithoutReferrerNestedInputSchema).optional(),
  referral: z.lazy(() => referralsUpdateOneWithoutReferredNestedInputSchema).optional(),
  cashback: z.lazy(() => cashbackUpdateManyWithoutUserNestedInputSchema).optional(),
  business_teams: z.lazy(() => business_teamsUpdateOneWithoutUsersNestedInputSchema).optional(),
  order_lobby_users: z.lazy(() => order_lobby_usersUpdateManyWithoutUsersNestedInputSchema).optional(),
  promo_section_buys: z.lazy(() => promo_sections_buyUpdateManyWithoutBought_byNestedInputSchema).optional(),
  user_favorite_businesses: z.lazy(() => user_favorite_businessesUpdateManyWithoutUsersNestedInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsUpdateManyWithoutUsersNestedInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsUpdateManyWithoutUserNestedInputSchema).optional(),
  late_events: z.lazy(() => late_eventsUpdateManyWithoutUsersNestedInputSchema).optional(),
  account_actions: z.lazy(() => account_actionsUpdateManyWithoutUserNestedInputSchema).optional(),
  created_account_actions: z.lazy(() => account_actionsUpdateManyWithoutAction_creatorNestedInputSchema).optional()
}).strict();

export default usersUpdateWithoutDriverInputSchema;
