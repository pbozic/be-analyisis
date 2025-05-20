import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGENDERNullableFilterSchema } from './EnumGENDERNullableFilterSchema';
import { GENDERSchema } from './GENDERSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumUSER_ROLESFilterSchema } from './EnumUSER_ROLESFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { User_rolesListRelationFilterSchema } from './User_rolesListRelationFilterSchema';
import { User_addressListRelationFilterSchema } from './User_addressListRelationFilterSchema';
import { TokensListRelationFilterSchema } from './TokensListRelationFilterSchema';
import { Business_usersListRelationFilterSchema } from './Business_usersListRelationFilterSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { Delivery_ordersListRelationFilterSchema } from './Delivery_ordersListRelationFilterSchema';
import { ReviewableNullableRelationFilterSchema } from './ReviewableNullableRelationFilterSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { ReviewsListRelationFilterSchema } from './ReviewsListRelationFilterSchema';
import { TransactionsListRelationFilterSchema } from './TransactionsListRelationFilterSchema';
import { ReservationsListRelationFilterSchema } from './ReservationsListRelationFilterSchema';
import { Flag_historyListRelationFilterSchema } from './Flag_historyListRelationFilterSchema';
import { Lost_itemsListRelationFilterSchema } from './Lost_itemsListRelationFilterSchema';
import { Group_usersListRelationFilterSchema } from './Group_usersListRelationFilterSchema';
import { Group_usersNullableRelationFilterSchema } from './Group_usersNullableRelationFilterSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { Wallet_fundsListRelationFilterSchema } from './Wallet_fundsListRelationFilterSchema';
import { ReferralsListRelationFilterSchema } from './ReferralsListRelationFilterSchema';
import { ReferralsNullableRelationFilterSchema } from './ReferralsNullableRelationFilterSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { CashbackListRelationFilterSchema } from './CashbackListRelationFilterSchema';
import { Business_teamsNullableRelationFilterSchema } from './Business_teamsNullableRelationFilterSchema';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';
import { Order_lobby_usersListRelationFilterSchema } from './Order_lobby_usersListRelationFilterSchema';
import { Promo_sections_buyListRelationFilterSchema } from './Promo_sections_buyListRelationFilterSchema';
import { User_favorite_businessesListRelationFilterSchema } from './User_favorite_businessesListRelationFilterSchema';
import { Scoring_pointsListRelationFilterSchema } from './Scoring_pointsListRelationFilterSchema';
import { Daily_meals_subscriptionsListRelationFilterSchema } from './Daily_meals_subscriptionsListRelationFilterSchema';
import { Late_eventsListRelationFilterSchema } from './Late_eventsListRelationFilterSchema';
import { Account_actionsListRelationFilterSchema } from './Account_actionsListRelationFilterSchema';

export const usersWhereUniqueInputSchema: z.ZodType<Prisma.usersWhereUniqueInput> = z.union([
  z.object({
    user_id: z.string().uuid(),
    telephone: z.string(),
    referral_code: z.string()
  }),
  z.object({
    user_id: z.string().uuid(),
    telephone: z.string(),
  }),
  z.object({
    user_id: z.string().uuid(),
    referral_code: z.string(),
  }),
  z.object({
    user_id: z.string().uuid(),
  }),
  z.object({
    telephone: z.string(),
    referral_code: z.string(),
  }),
  z.object({
    telephone: z.string(),
  }),
  z.object({
    referral_code: z.string(),
  }),
])
.and(z.object({
  user_id: z.string().uuid().optional(),
  telephone: z.string().optional(),
  referral_code: z.string().optional(),
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  first_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGENDERNullableFilterSchema),z.lazy(() => GENDERSchema) ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telephone_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date_of_birth: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_role: z.union([ z.lazy(() => EnumUSER_ROLESFilterSchema),z.lazy(() => USER_ROLESSchema) ]).optional(),
  phone_verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  taxi_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  reviewable_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  review_complete: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  one_signal_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stripe_customer_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wallet_balance: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  transfer_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  allergies_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  spicy_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  radio_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  subscribed_to_daily_meals: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  daily_meal_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  details: z.lazy(() => JsonNullableFilterSchema).optional(),
  taxi_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  transfer_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  delivery_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  spoken_languages: z.lazy(() => JsonNullableFilterSchema).optional(),
  daily_meal_day_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  disabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  apple_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  google_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  activated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  business_teams_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  allow_marketing_push_notifications: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  allow_ads_personalization: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  allow_newsletter: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  user_roles: z.lazy(() => User_rolesListRelationFilterSchema).optional(),
  addresses: z.lazy(() => User_addressListRelationFilterSchema).optional(),
  tokens: z.lazy(() => TokensListRelationFilterSchema).optional(),
  business_users: z.lazy(() => Business_usersListRelationFilterSchema).optional(),
  driver: z.union([ z.lazy(() => DriversNullableRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional().nullable(),
  orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
  documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
  delivery_driver: z.union([ z.lazy(() => Delivery_driversNullableRelationFilterSchema),z.lazy(() => delivery_driversWhereInputSchema) ]).optional().nullable(),
  delivery_orders: z.lazy(() => Delivery_ordersListRelationFilterSchema).optional(),
  reviewable: z.union([ z.lazy(() => ReviewableNullableRelationFilterSchema),z.lazy(() => reviewableWhereInputSchema) ]).optional().nullable(),
  reviews: z.lazy(() => ReviewsListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionsListRelationFilterSchema).optional(),
  reservations: z.lazy(() => ReservationsListRelationFilterSchema).optional(),
  flag_changes: z.lazy(() => Flag_historyListRelationFilterSchema).optional(),
  lost_items: z.lazy(() => Lost_itemsListRelationFilterSchema).optional(),
  child_users: z.lazy(() => Group_usersListRelationFilterSchema).optional(),
  parent_user: z.union([ z.lazy(() => Group_usersNullableRelationFilterSchema),z.lazy(() => group_usersWhereInputSchema) ]).optional().nullable(),
  wallet_funds: z.lazy(() => Wallet_fundsListRelationFilterSchema).optional(),
  referrals_made: z.lazy(() => ReferralsListRelationFilterSchema).optional(),
  referral: z.union([ z.lazy(() => ReferralsNullableRelationFilterSchema),z.lazy(() => referralsWhereInputSchema) ]).optional().nullable(),
  cashback: z.lazy(() => CashbackListRelationFilterSchema).optional(),
  business_teams: z.union([ z.lazy(() => Business_teamsNullableRelationFilterSchema),z.lazy(() => business_teamsWhereInputSchema) ]).optional().nullable(),
  order_lobby_users: z.lazy(() => Order_lobby_usersListRelationFilterSchema).optional(),
  promo_section_buys: z.lazy(() => Promo_sections_buyListRelationFilterSchema).optional(),
  user_favorite_businesses: z.lazy(() => User_favorite_businessesListRelationFilterSchema).optional(),
  scoring_points: z.lazy(() => Scoring_pointsListRelationFilterSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => Daily_meals_subscriptionsListRelationFilterSchema).optional(),
  late_events: z.lazy(() => Late_eventsListRelationFilterSchema).optional(),
  account_actions: z.lazy(() => Account_actionsListRelationFilterSchema).optional(),
  created_account_actions: z.lazy(() => Account_actionsListRelationFilterSchema).optional()
}).strict());

export default usersWhereUniqueInputSchema;
