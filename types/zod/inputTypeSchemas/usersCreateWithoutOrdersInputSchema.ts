import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { user_rolesCreateNestedManyWithoutUserInputSchema } from './user_rolesCreateNestedManyWithoutUserInputSchema';
import { user_addressCreateNestedManyWithoutUsersInputSchema } from './user_addressCreateNestedManyWithoutUsersInputSchema';
import { tokensCreateNestedManyWithoutUsersInputSchema } from './tokensCreateNestedManyWithoutUsersInputSchema';
import { business_usersCreateNestedManyWithoutUsersInputSchema } from './business_usersCreateNestedManyWithoutUsersInputSchema';
import { driversCreateNestedOneWithoutUserInputSchema } from './driversCreateNestedOneWithoutUserInputSchema';
import { documentsCreateNestedManyWithoutUserInputSchema } from './documentsCreateNestedManyWithoutUserInputSchema';
import { delivery_driversCreateNestedOneWithoutUserInputSchema } from './delivery_driversCreateNestedOneWithoutUserInputSchema';
import { delivery_ordersCreateNestedManyWithoutUserInputSchema } from './delivery_ordersCreateNestedManyWithoutUserInputSchema';
import { reviewableCreateNestedOneWithoutUserInputSchema } from './reviewableCreateNestedOneWithoutUserInputSchema';
import { reviewsCreateNestedManyWithoutAuthorInputSchema } from './reviewsCreateNestedManyWithoutAuthorInputSchema';
import { transactionsCreateNestedManyWithoutUserInputSchema } from './transactionsCreateNestedManyWithoutUserInputSchema';
import { reservationsCreateNestedManyWithoutUserInputSchema } from './reservationsCreateNestedManyWithoutUserInputSchema';
import { flag_historyCreateNestedManyWithoutUserInputSchema } from './flag_historyCreateNestedManyWithoutUserInputSchema';
import { lost_itemsCreateNestedManyWithoutUserInputSchema } from './lost_itemsCreateNestedManyWithoutUserInputSchema';
import { group_usersCreateNestedManyWithoutParent_userInputSchema } from './group_usersCreateNestedManyWithoutParent_userInputSchema';
import { group_usersCreateNestedOneWithoutChild_userInputSchema } from './group_usersCreateNestedOneWithoutChild_userInputSchema';
import { wallet_fundsCreateNestedManyWithoutUserInputSchema } from './wallet_fundsCreateNestedManyWithoutUserInputSchema';
import { referralsCreateNestedManyWithoutReferrerInputSchema } from './referralsCreateNestedManyWithoutReferrerInputSchema';
import { referralsCreateNestedOneWithoutReferredInputSchema } from './referralsCreateNestedOneWithoutReferredInputSchema';
import { cashbackCreateNestedManyWithoutUserInputSchema } from './cashbackCreateNestedManyWithoutUserInputSchema';
import { business_teamsCreateNestedOneWithoutUsersInputSchema } from './business_teamsCreateNestedOneWithoutUsersInputSchema';
import { order_lobby_usersCreateNestedManyWithoutUsersInputSchema } from './order_lobby_usersCreateNestedManyWithoutUsersInputSchema';
import { promo_sections_buyCreateNestedManyWithoutBought_byInputSchema } from './promo_sections_buyCreateNestedManyWithoutBought_byInputSchema';
import { user_favorite_businessesCreateNestedManyWithoutUsersInputSchema } from './user_favorite_businessesCreateNestedManyWithoutUsersInputSchema';
import { scoring_pointsCreateNestedManyWithoutUsersInputSchema } from './scoring_pointsCreateNestedManyWithoutUsersInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutUserInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutUserInputSchema';
import { late_eventsCreateNestedManyWithoutUsersInputSchema } from './late_eventsCreateNestedManyWithoutUsersInputSchema';
import { account_actionsCreateNestedManyWithoutUserInputSchema } from './account_actionsCreateNestedManyWithoutUserInputSchema';
import { account_actionsCreateNestedManyWithoutAction_creatorInputSchema } from './account_actionsCreateNestedManyWithoutAction_creatorInputSchema';

export const usersCreateWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateWithoutOrdersInput> = z.object({
  user_id: z.string().uuid().optional(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  password: z.string(),
  gender: z.lazy(() => GENDERSchema).optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string(),
  telephone_code: z.string(),
  telephone_number: z.string(),
  date_of_birth: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_role: z.lazy(() => USER_ROLESSchema).optional(),
  phone_verified: z.boolean().optional(),
  notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  taxi_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  review_complete: z.boolean().optional(),
  one_signal_id: z.string().optional().nullable(),
  stripe_customer_id: z.string().optional().nullable(),
  wallet_balance: z.number().optional(),
  transfer_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allergies_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  spicy_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  radio_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  subscribed_to_daily_meals: z.boolean().optional(),
  daily_meal_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  details: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  taxi_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  transfer_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  delivery_push_notification_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  spoken_languages: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  daily_meal_day_preferences: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  disabled: z.boolean().optional(),
  active: z.boolean().optional(),
  language: z.string().optional().nullable(),
  apple_id: z.string().optional().nullable(),
  google_id: z.string().optional().nullable(),
  referral_code: z.string().optional().nullable(),
  activated_at: z.coerce.date().optional().nullable(),
  allow_marketing_push_notifications: z.boolean().optional().nullable(),
  allow_ads_personalization: z.boolean().optional().nullable(),
  allow_newsletter: z.boolean().optional().nullable(),
  user_roles: z.lazy(() => user_rolesCreateNestedManyWithoutUserInputSchema).optional(),
  addresses: z.lazy(() => user_addressCreateNestedManyWithoutUsersInputSchema).optional(),
  tokens: z.lazy(() => tokensCreateNestedManyWithoutUsersInputSchema).optional(),
  business_users: z.lazy(() => business_usersCreateNestedManyWithoutUsersInputSchema).optional(),
  driver: z.lazy(() => driversCreateNestedOneWithoutUserInputSchema).optional(),
  documents: z.lazy(() => documentsCreateNestedManyWithoutUserInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutUserInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedManyWithoutUserInputSchema).optional(),
  reviewable: z.lazy(() => reviewableCreateNestedOneWithoutUserInputSchema).optional(),
  reviews: z.lazy(() => reviewsCreateNestedManyWithoutAuthorInputSchema).optional(),
  transactions: z.lazy(() => transactionsCreateNestedManyWithoutUserInputSchema).optional(),
  reservations: z.lazy(() => reservationsCreateNestedManyWithoutUserInputSchema).optional(),
  flag_changes: z.lazy(() => flag_historyCreateNestedManyWithoutUserInputSchema).optional(),
  lost_items: z.lazy(() => lost_itemsCreateNestedManyWithoutUserInputSchema).optional(),
  child_users: z.lazy(() => group_usersCreateNestedManyWithoutParent_userInputSchema).optional(),
  parent_user: z.lazy(() => group_usersCreateNestedOneWithoutChild_userInputSchema).optional(),
  wallet_funds: z.lazy(() => wallet_fundsCreateNestedManyWithoutUserInputSchema).optional(),
  referrals_made: z.lazy(() => referralsCreateNestedManyWithoutReferrerInputSchema).optional(),
  referral: z.lazy(() => referralsCreateNestedOneWithoutReferredInputSchema).optional(),
  cashback: z.lazy(() => cashbackCreateNestedManyWithoutUserInputSchema).optional(),
  business_teams: z.lazy(() => business_teamsCreateNestedOneWithoutUsersInputSchema).optional(),
  order_lobby_users: z.lazy(() => order_lobby_usersCreateNestedManyWithoutUsersInputSchema).optional(),
  promo_section_buys: z.lazy(() => promo_sections_buyCreateNestedManyWithoutBought_byInputSchema).optional(),
  user_favorite_businesses: z.lazy(() => user_favorite_businessesCreateNestedManyWithoutUsersInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsCreateNestedManyWithoutUsersInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutUserInputSchema).optional(),
  late_events: z.lazy(() => late_eventsCreateNestedManyWithoutUsersInputSchema).optional(),
  account_actions: z.lazy(() => account_actionsCreateNestedManyWithoutUserInputSchema).optional(),
  created_account_actions: z.lazy(() => account_actionsCreateNestedManyWithoutAction_creatorInputSchema).optional()
}).strict();

export default usersCreateWithoutOrdersInputSchema;
