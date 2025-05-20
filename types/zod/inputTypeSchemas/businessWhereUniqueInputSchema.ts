import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumBUSINESS_TYPEFilterSchema } from './EnumBUSINESS_TYPEFilterSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumSORTING_TYPEFilterSchema } from './EnumSORTING_TYPEFilterSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { AddressesNullableRelationFilterSchema } from './AddressesNullableRelationFilterSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { FinancesNullableRelationFilterSchema } from './FinancesNullableRelationFilterSchema';
import { financesWhereInputSchema } from './financesWhereInputSchema';
import { Business_usersListRelationFilterSchema } from './Business_usersListRelationFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';
import { Delivery_ordersListRelationFilterSchema } from './Delivery_ordersListRelationFilterSchema';
import { MenusListRelationFilterSchema } from './MenusListRelationFilterSchema';
import { ReviewableNullableRelationFilterSchema } from './ReviewableNullableRelationFilterSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { Local_productsNullableRelationFilterSchema } from './Local_productsNullableRelationFilterSchema';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';
import { Word_buyListRelationFilterSchema } from './Word_buyListRelationFilterSchema';
import { ReservationsListRelationFilterSchema } from './ReservationsListRelationFilterSchema';
import { Promo_sections_buyListRelationFilterSchema } from './Promo_sections_buyListRelationFilterSchema';
import { Business_teamsListRelationFilterSchema } from './Business_teamsListRelationFilterSchema';
import { Order_lobbiesListRelationFilterSchema } from './Order_lobbiesListRelationFilterSchema';
import { User_favorite_businessesListRelationFilterSchema } from './User_favorite_businessesListRelationFilterSchema';
import { Scoring_pointsListRelationFilterSchema } from './Scoring_pointsListRelationFilterSchema';
import { Delivery_driversListRelationFilterSchema } from './Delivery_driversListRelationFilterSchema';
import { Late_eventsListRelationFilterSchema } from './Late_eventsListRelationFilterSchema';
import { Fiscal_devicesNullableRelationFilterSchema } from './Fiscal_devicesNullableRelationFilterSchema';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';
import { Daily_meals_subscriptionsListRelationFilterSchema } from './Daily_meals_subscriptionsListRelationFilterSchema';
import { Account_actionsListRelationFilterSchema } from './Account_actionsListRelationFilterSchema';
import { Business_clientsListRelationFilterSchema } from './Business_clientsListRelationFilterSchema';

export const businessWhereUniqueInputSchema: z.ZodType<Prisma.businessWhereUniqueInput> = z.union([
  z.object({
    business_id: z.string().uuid(),
    email: z.string()
  }),
  z.object({
    business_id: z.string().uuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  business_id: z.string().uuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => businessWhereInputSchema),z.lazy(() => businessWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => businessWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => businessWhereInputSchema),z.lazy(() => businessWhereInputSchema).array() ]).optional(),
  address_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_address_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  finance_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumBUSINESS_TYPEFilterSchema),z.lazy(() => BUSINESS_TYPESchema) ]).optional(),
  is_business_unit: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  business_group_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tax_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  registration_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telephone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telephone_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website_url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  working_hours: z.lazy(() => JsonNullableFilterSchema).optional(),
  seats: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  minimum_order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  offers_daily_meals: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  offers_daily_meals_on_weekend: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  popular: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  new: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parent_business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewable_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  stripe_account_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stripe_customer_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  word_buy_stripe_product_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  word_buy_stripe_subscription_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  daily_users_sorted: z.lazy(() => JsonNullableFilterSchema).optional(),
  daily_users_sorting_type: z.union([ z.lazy(() => EnumSORTING_TYPEFilterSchema),z.lazy(() => SORTING_TYPESchema) ]).optional(),
  restaurant_overwhelmed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  first_activated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sales_representative_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fiscal_devices_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  purchase_order_limit_amount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressesNullableRelationFilterSchema),z.lazy(() => addressesWhereInputSchema) ]).optional().nullable(),
  delivery_address: z.union([ z.lazy(() => AddressesNullableRelationFilterSchema),z.lazy(() => addressesWhereInputSchema) ]).optional().nullable(),
  finances: z.union([ z.lazy(() => FinancesNullableRelationFilterSchema),z.lazy(() => financesWhereInputSchema) ]).optional().nullable(),
  business_users: z.lazy(() => Business_usersListRelationFilterSchema).optional(),
  documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
  parent_business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  child_businesses: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  taxi_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
  delivery_orders: z.lazy(() => Delivery_ordersListRelationFilterSchema).optional(),
  menus: z.lazy(() => MenusListRelationFilterSchema).optional(),
  reviewable: z.union([ z.lazy(() => ReviewableNullableRelationFilterSchema),z.lazy(() => reviewableWhereInputSchema) ]).optional().nullable(),
  word_buy_stripe_product: z.union([ z.lazy(() => Local_productsNullableRelationFilterSchema),z.lazy(() => local_productsWhereInputSchema) ]).optional().nullable(),
  word_buys: z.lazy(() => Word_buyListRelationFilterSchema).optional(),
  reservations: z.lazy(() => ReservationsListRelationFilterSchema).optional(),
  promo_sections: z.lazy(() => Promo_sections_buyListRelationFilterSchema).optional(),
  business_teams: z.lazy(() => Business_teamsListRelationFilterSchema).optional(),
  business_order_lobbies: z.lazy(() => Order_lobbiesListRelationFilterSchema).optional(),
  user_favorite_businesses: z.lazy(() => User_favorite_businessesListRelationFilterSchema).optional(),
  scoring_points: z.lazy(() => Scoring_pointsListRelationFilterSchema).optional(),
  daily_meal_drivers: z.lazy(() => Delivery_driversListRelationFilterSchema).optional(),
  late_events: z.lazy(() => Late_eventsListRelationFilterSchema).optional(),
  fiscal_device: z.union([ z.lazy(() => Fiscal_devicesNullableRelationFilterSchema),z.lazy(() => fiscal_devicesWhereInputSchema) ]).optional().nullable(),
  daily_meals_subscribers: z.lazy(() => Daily_meals_subscriptionsListRelationFilterSchema).optional(),
  account_actions: z.lazy(() => Account_actionsListRelationFilterSchema).optional(),
  business_clients: z.lazy(() => Business_clientsListRelationFilterSchema).optional()
}).strict());

export default businessWhereUniqueInputSchema;
