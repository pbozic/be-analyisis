import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { GENDERSchema } from '../inputTypeSchemas/GENDERSchema'
import { USER_ROLESSchema } from '../inputTypeSchemas/USER_ROLESSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { user_rolesWithRelationsSchema } from './user_rolesSchema'
import type { user_rolesWithRelations } from './user_rolesSchema'
import { user_addressWithRelationsSchema } from './user_addressSchema'
import type { user_addressWithRelations } from './user_addressSchema'
import { tokensWithRelationsSchema } from './tokensSchema'
import type { tokensWithRelations } from './tokensSchema'
import { business_usersWithRelationsSchema } from './business_usersSchema'
import type { business_usersWithRelations } from './business_usersSchema'
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema'
import type { delivery_driversWithRelations } from './delivery_driversSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { reviewableWithRelationsSchema } from './reviewableSchema'
import type { reviewableWithRelations } from './reviewableSchema'
import { reviewsWithRelationsSchema } from './reviewsSchema'
import type { reviewsWithRelations } from './reviewsSchema'
import { transactionsWithRelationsSchema } from './transactionsSchema'
import type { transactionsWithRelations } from './transactionsSchema'
import { reservationsWithRelationsSchema } from './reservationsSchema'
import type { reservationsWithRelations } from './reservationsSchema'
import { flag_historyWithRelationsSchema } from './flag_historySchema'
import type { flag_historyWithRelations } from './flag_historySchema'
import { lost_itemsWithRelationsSchema } from './lost_itemsSchema'
import type { lost_itemsWithRelations } from './lost_itemsSchema'
import { group_usersWithRelationsSchema } from './group_usersSchema'
import type { group_usersWithRelations } from './group_usersSchema'
import { wallet_fundsWithRelationsSchema } from './wallet_fundsSchema'
import type { wallet_fundsWithRelations } from './wallet_fundsSchema'
import { referralsWithRelationsSchema } from './referralsSchema'
import type { referralsWithRelations } from './referralsSchema'
import { cashbackWithRelationsSchema } from './cashbackSchema'
import type { cashbackWithRelations } from './cashbackSchema'
import { business_teamsWithRelationsSchema } from './business_teamsSchema'
import type { business_teamsWithRelations } from './business_teamsSchema'
import { order_lobby_usersWithRelationsSchema } from './order_lobby_usersSchema'
import type { order_lobby_usersWithRelations } from './order_lobby_usersSchema'
import { promo_sections_buyWithRelationsSchema } from './promo_sections_buySchema'
import type { promo_sections_buyWithRelations } from './promo_sections_buySchema'
import { user_favorite_businessesWithRelationsSchema } from './user_favorite_businessesSchema'
import type { user_favorite_businessesWithRelations } from './user_favorite_businessesSchema'
import { scoring_pointsWithRelationsSchema } from './scoring_pointsSchema'
import type { scoring_pointsWithRelations } from './scoring_pointsSchema'
import { daily_meals_subscriptionsWithRelationsSchema } from './daily_meals_subscriptionsSchema'
import type { daily_meals_subscriptionsWithRelations } from './daily_meals_subscriptionsSchema'
import { late_eventsWithRelationsSchema } from './late_eventsSchema'
import type { late_eventsWithRelations } from './late_eventsSchema'
import { account_actionsWithRelationsSchema } from './account_actionsSchema'
import type { account_actionsWithRelations } from './account_actionsSchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  gender: GENDERSchema.nullable(),
  user_role: USER_ROLESSchema,
  user_id: z.string().uuid(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  password: z.string(),
  email: z.string().nullable(),
  telephone: z.string(),
  telephone_code: z.string(),
  telephone_number: z.string(),
  date_of_birth: z.coerce.date(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  phone_verified: z.boolean(),
  notification_preferences: JsonValueSchema.nullable(),
  taxi_preferences: JsonValueSchema.nullable(),
  reviewable_id: z.string().nullable(),
  review_complete: z.boolean(),
  one_signal_id: z.string().nullable(),
  stripe_customer_id: z.string().nullable(),
  wallet_balance: z.number(),
  transfer_preferences: JsonValueSchema.nullable(),
  allergies_preferences: JsonValueSchema.nullable(),
  spicy_preferences: JsonValueSchema.nullable(),
  radio_preferences: JsonValueSchema.nullable(),
  subscribed_to_daily_meals: z.boolean(),
  daily_meal_preferences: JsonValueSchema.nullable(),
  details: JsonValueSchema.nullable(),
  taxi_push_notification_preferences: JsonValueSchema.nullable(),
  transfer_push_notification_preferences: JsonValueSchema.nullable(),
  delivery_push_notification_preferences: JsonValueSchema.nullable(),
  spoken_languages: JsonValueSchema.nullable(),
  daily_meal_day_preferences: JsonValueSchema.nullable(),
  disabled: z.boolean(),
  active: z.boolean(),
  language: z.string().nullable(),
  apple_id: z.string().nullable(),
  google_id: z.string().nullable(),
  referral_code: z.string().nullable(),
  activated_at: z.coerce.date().nullable(),
  business_teams_id: z.string().nullable(),
  allow_marketing_push_notifications: z.boolean().nullable(),
  allow_ads_personalization: z.boolean().nullable(),
  allow_newsletter: z.boolean().nullable(),
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// USERS RELATION SCHEMA
/////////////////////////////////////////

export type usersRelations = {
  user_roles: user_rolesWithRelations[];
  addresses: user_addressWithRelations[];
  tokens: tokensWithRelations[];
  business_users: business_usersWithRelations[];
  driver?: driversWithRelations | null;
  orders: taxi_ordersWithRelations[];
  documents: documentsWithRelations[];
  delivery_driver?: delivery_driversWithRelations | null;
  delivery_orders: delivery_ordersWithRelations[];
  reviewable?: reviewableWithRelations | null;
  reviews: reviewsWithRelations[];
  transactions: transactionsWithRelations[];
  reservations: reservationsWithRelations[];
  flag_changes: flag_historyWithRelations[];
  lost_items: lost_itemsWithRelations[];
  child_users: group_usersWithRelations[];
  parent_user?: group_usersWithRelations | null;
  wallet_funds: wallet_fundsWithRelations[];
  referrals_made: referralsWithRelations[];
  referral?: referralsWithRelations | null;
  cashback: cashbackWithRelations[];
  business_teams?: business_teamsWithRelations | null;
  order_lobby_users: order_lobby_usersWithRelations[];
  promo_section_buys: promo_sections_buyWithRelations[];
  user_favorite_businesses: user_favorite_businessesWithRelations[];
  scoring_points: scoring_pointsWithRelations[];
  daily_meals_subscriptions: daily_meals_subscriptionsWithRelations[];
  late_events: late_eventsWithRelations[];
  account_actions: account_actionsWithRelations[];
  created_account_actions: account_actionsWithRelations[];
};

export type usersWithRelations = Omit<z.infer<typeof usersSchema>, "notification_preferences" | "taxi_preferences" | "transfer_preferences" | "allergies_preferences" | "spicy_preferences" | "radio_preferences" | "daily_meal_preferences" | "details" | "taxi_push_notification_preferences" | "transfer_push_notification_preferences" | "delivery_push_notification_preferences" | "spoken_languages" | "daily_meal_day_preferences"> & {
  notification_preferences?: JsonValueType | null;
  taxi_preferences?: JsonValueType | null;
  transfer_preferences?: JsonValueType | null;
  allergies_preferences?: JsonValueType | null;
  spicy_preferences?: JsonValueType | null;
  radio_preferences?: JsonValueType | null;
  daily_meal_preferences?: JsonValueType | null;
  details?: JsonValueType | null;
  taxi_push_notification_preferences?: JsonValueType | null;
  transfer_push_notification_preferences?: JsonValueType | null;
  delivery_push_notification_preferences?: JsonValueType | null;
  spoken_languages?: JsonValueType | null;
  daily_meal_day_preferences?: JsonValueType | null;
} & usersRelations

export const usersWithRelationsSchema: z.ZodType<usersWithRelations> = usersSchema.merge(z.object({
  user_roles: z.lazy(() => user_rolesWithRelationsSchema).array(),
  addresses: z.lazy(() => user_addressWithRelationsSchema).array(),
  tokens: z.lazy(() => tokensWithRelationsSchema).array(),
  business_users: z.lazy(() => business_usersWithRelationsSchema).array(),
  driver: z.lazy(() => driversWithRelationsSchema).nullable(),
  orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
  delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).array(),
  reviewable: z.lazy(() => reviewableWithRelationsSchema).nullable(),
  reviews: z.lazy(() => reviewsWithRelationsSchema).array(),
  transactions: z.lazy(() => transactionsWithRelationsSchema).array(),
  reservations: z.lazy(() => reservationsWithRelationsSchema).array(),
  flag_changes: z.lazy(() => flag_historyWithRelationsSchema).array(),
  lost_items: z.lazy(() => lost_itemsWithRelationsSchema).array(),
  child_users: z.lazy(() => group_usersWithRelationsSchema).array(),
  parent_user: z.lazy(() => group_usersWithRelationsSchema).nullable(),
  wallet_funds: z.lazy(() => wallet_fundsWithRelationsSchema).array(),
  referrals_made: z.lazy(() => referralsWithRelationsSchema).array(),
  referral: z.lazy(() => referralsWithRelationsSchema).nullable(),
  cashback: z.lazy(() => cashbackWithRelationsSchema).array(),
  business_teams: z.lazy(() => business_teamsWithRelationsSchema).nullable(),
  order_lobby_users: z.lazy(() => order_lobby_usersWithRelationsSchema).array(),
  promo_section_buys: z.lazy(() => promo_sections_buyWithRelationsSchema).array(),
  user_favorite_businesses: z.lazy(() => user_favorite_businessesWithRelationsSchema).array(),
  scoring_points: z.lazy(() => scoring_pointsWithRelationsSchema).array(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsWithRelationsSchema).array(),
  late_events: z.lazy(() => late_eventsWithRelationsSchema).array(),
  account_actions: z.lazy(() => account_actionsWithRelationsSchema).array(),
  created_account_actions: z.lazy(() => account_actionsWithRelationsSchema).array(),
}))

export default usersSchema;
