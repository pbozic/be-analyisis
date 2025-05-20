import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { addressesCreateNestedOneWithoutBusinessesInputSchema } from './addressesCreateNestedOneWithoutBusinessesInputSchema';
import { addressesCreateNestedOneWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateNestedOneWithoutBusinesses_delivery_addressInputSchema';
import { business_usersCreateNestedManyWithoutBusinessInputSchema } from './business_usersCreateNestedManyWithoutBusinessInputSchema';
import { documentsCreateNestedManyWithoutBusinessInputSchema } from './documentsCreateNestedManyWithoutBusinessInputSchema';
import { businessCreateNestedOneWithoutChild_businessesInputSchema } from './businessCreateNestedOneWithoutChild_businessesInputSchema';
import { businessCreateNestedManyWithoutParent_businessInputSchema } from './businessCreateNestedManyWithoutParent_businessInputSchema';
import { taxi_ordersCreateNestedManyWithoutBusinessInputSchema } from './taxi_ordersCreateNestedManyWithoutBusinessInputSchema';
import { delivery_ordersCreateNestedManyWithoutBusinessInputSchema } from './delivery_ordersCreateNestedManyWithoutBusinessInputSchema';
import { menusCreateNestedManyWithoutBusinessInputSchema } from './menusCreateNestedManyWithoutBusinessInputSchema';
import { reviewableCreateNestedOneWithoutBusinessInputSchema } from './reviewableCreateNestedOneWithoutBusinessInputSchema';
import { local_productsCreateNestedOneWithoutBusinessInputSchema } from './local_productsCreateNestedOneWithoutBusinessInputSchema';
import { word_buyCreateNestedManyWithoutBusinessInputSchema } from './word_buyCreateNestedManyWithoutBusinessInputSchema';
import { reservationsCreateNestedManyWithoutBusinessInputSchema } from './reservationsCreateNestedManyWithoutBusinessInputSchema';
import { promo_sections_buyCreateNestedManyWithoutBusinessInputSchema } from './promo_sections_buyCreateNestedManyWithoutBusinessInputSchema';
import { business_teamsCreateNestedManyWithoutBusinessInputSchema } from './business_teamsCreateNestedManyWithoutBusinessInputSchema';
import { order_lobbiesCreateNestedManyWithoutBusinessInputSchema } from './order_lobbiesCreateNestedManyWithoutBusinessInputSchema';
import { user_favorite_businessesCreateNestedManyWithoutBusinessesInputSchema } from './user_favorite_businessesCreateNestedManyWithoutBusinessesInputSchema';
import { scoring_pointsCreateNestedManyWithoutBusinessesInputSchema } from './scoring_pointsCreateNestedManyWithoutBusinessesInputSchema';
import { delivery_driversCreateNestedManyWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateNestedManyWithoutDaily_meal_businessInputSchema';
import { late_eventsCreateNestedManyWithoutBusinessesInputSchema } from './late_eventsCreateNestedManyWithoutBusinessesInputSchema';
import { fiscal_devicesCreateNestedOneWithoutBusinessesInputSchema } from './fiscal_devicesCreateNestedOneWithoutBusinessesInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutBusinessInputSchema';
import { account_actionsCreateNestedManyWithoutBusinessInputSchema } from './account_actionsCreateNestedManyWithoutBusinessInputSchema';
import { business_clientsCreateNestedManyWithoutBusinessInputSchema } from './business_clientsCreateNestedManyWithoutBusinessInputSchema';

export const businessCreateWithoutFinancesInputSchema: z.ZodType<Prisma.businessCreateWithoutFinancesInput> = z.object({
  business_id: z.string().uuid().optional(),
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
  working_hours: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  seats: z.number().int().optional().nullable(),
  minimum_order: z.number().int(),
  offers_daily_meals: z.boolean().optional(),
  offers_daily_meals_on_weekend: z.boolean().optional(),
  popular: z.boolean().optional(),
  new: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  stripe_account_id: z.string().optional().nullable(),
  stripe_customer_id: z.string().optional().nullable(),
  word_buy_stripe_product_id: z.string().optional().nullable(),
  word_buy_stripe_subscription_id: z.string().optional().nullable(),
  daily_users_sorted: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  daily_users_sorting_type: z.lazy(() => SORTING_TYPESchema).optional(),
  restaurant_overwhelmed: z.boolean().optional(),
  first_activated_at: z.coerce.date().optional().nullable(),
  active: z.boolean().optional(),
  sales_representative_id: z.string().optional().nullable(),
  purchase_order_limit_amount: z.number().optional().nullable(),
  address: z.lazy(() => addressesCreateNestedOneWithoutBusinessesInputSchema).optional(),
  delivery_address: z.lazy(() => addressesCreateNestedOneWithoutBusinesses_delivery_addressInputSchema).optional(),
  business_users: z.lazy(() => business_usersCreateNestedManyWithoutBusinessInputSchema).optional(),
  documents: z.lazy(() => documentsCreateNestedManyWithoutBusinessInputSchema).optional(),
  parent_business: z.lazy(() => businessCreateNestedOneWithoutChild_businessesInputSchema).optional(),
  child_businesses: z.lazy(() => businessCreateNestedManyWithoutParent_businessInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutBusinessInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersCreateNestedManyWithoutBusinessInputSchema).optional(),
  menus: z.lazy(() => menusCreateNestedManyWithoutBusinessInputSchema).optional(),
  reviewable: z.lazy(() => reviewableCreateNestedOneWithoutBusinessInputSchema).optional(),
  word_buy_stripe_product: z.lazy(() => local_productsCreateNestedOneWithoutBusinessInputSchema).optional(),
  word_buys: z.lazy(() => word_buyCreateNestedManyWithoutBusinessInputSchema).optional(),
  reservations: z.lazy(() => reservationsCreateNestedManyWithoutBusinessInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sections_buyCreateNestedManyWithoutBusinessInputSchema).optional(),
  business_teams: z.lazy(() => business_teamsCreateNestedManyWithoutBusinessInputSchema).optional(),
  business_order_lobbies: z.lazy(() => order_lobbiesCreateNestedManyWithoutBusinessInputSchema).optional(),
  user_favorite_businesses: z.lazy(() => user_favorite_businessesCreateNestedManyWithoutBusinessesInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsCreateNestedManyWithoutBusinessesInputSchema).optional(),
  daily_meal_drivers: z.lazy(() => delivery_driversCreateNestedManyWithoutDaily_meal_businessInputSchema).optional(),
  late_events: z.lazy(() => late_eventsCreateNestedManyWithoutBusinessesInputSchema).optional(),
  fiscal_device: z.lazy(() => fiscal_devicesCreateNestedOneWithoutBusinessesInputSchema).optional(),
  daily_meals_subscribers: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutBusinessInputSchema).optional(),
  account_actions: z.lazy(() => account_actionsCreateNestedManyWithoutBusinessInputSchema).optional(),
  business_clients: z.lazy(() => business_clientsCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export default businessCreateWithoutFinancesInputSchema;
