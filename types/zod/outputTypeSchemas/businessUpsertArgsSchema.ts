import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessIncludeSchema } from '../inputTypeSchemas/businessIncludeSchema'
import { businessWhereUniqueInputSchema } from '../inputTypeSchemas/businessWhereUniqueInputSchema'
import { businessCreateInputSchema } from '../inputTypeSchemas/businessCreateInputSchema'
import { businessUncheckedCreateInputSchema } from '../inputTypeSchemas/businessUncheckedCreateInputSchema'
import { businessUpdateInputSchema } from '../inputTypeSchemas/businessUpdateInputSchema'
import { businessUncheckedUpdateInputSchema } from '../inputTypeSchemas/businessUncheckedUpdateInputSchema'
import { addressesArgsSchema } from "../outputTypeSchemas/addressesArgsSchema"
import { financesArgsSchema } from "../outputTypeSchemas/financesArgsSchema"
import { business_usersFindManyArgsSchema } from "../outputTypeSchemas/business_usersFindManyArgsSchema"
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { delivery_ordersFindManyArgsSchema } from "../outputTypeSchemas/delivery_ordersFindManyArgsSchema"
import { menusFindManyArgsSchema } from "../outputTypeSchemas/menusFindManyArgsSchema"
import { reviewableArgsSchema } from "../outputTypeSchemas/reviewableArgsSchema"
import { local_productsArgsSchema } from "../outputTypeSchemas/local_productsArgsSchema"
import { word_buyFindManyArgsSchema } from "../outputTypeSchemas/word_buyFindManyArgsSchema"
import { reservationsFindManyArgsSchema } from "../outputTypeSchemas/reservationsFindManyArgsSchema"
import { promo_sections_buyFindManyArgsSchema } from "../outputTypeSchemas/promo_sections_buyFindManyArgsSchema"
import { business_teamsFindManyArgsSchema } from "../outputTypeSchemas/business_teamsFindManyArgsSchema"
import { order_lobbiesFindManyArgsSchema } from "../outputTypeSchemas/order_lobbiesFindManyArgsSchema"
import { user_favorite_businessesFindManyArgsSchema } from "../outputTypeSchemas/user_favorite_businessesFindManyArgsSchema"
import { scoring_pointsFindManyArgsSchema } from "../outputTypeSchemas/scoring_pointsFindManyArgsSchema"
import { delivery_driversFindManyArgsSchema } from "../outputTypeSchemas/delivery_driversFindManyArgsSchema"
import { late_eventsFindManyArgsSchema } from "../outputTypeSchemas/late_eventsFindManyArgsSchema"
import { fiscal_devicesArgsSchema } from "../outputTypeSchemas/fiscal_devicesArgsSchema"
import { daily_meals_subscriptionsFindManyArgsSchema } from "../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema"
import { account_actionsFindManyArgsSchema } from "../outputTypeSchemas/account_actionsFindManyArgsSchema"
import { business_clientsFindManyArgsSchema } from "../outputTypeSchemas/business_clientsFindManyArgsSchema"
import { BusinessCountOutputTypeArgsSchema } from "../outputTypeSchemas/BusinessCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const businessSelectSchema: z.ZodType<Prisma.businessSelect> = z.object({
  business_id: z.boolean().optional(),
  address_id: z.boolean().optional(),
  delivery_address_id: z.boolean().optional(),
  finance_id: z.boolean().optional(),
  type: z.boolean().optional(),
  is_business_unit: z.boolean().optional(),
  business_group_name: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  tax_id: z.boolean().optional(),
  registration_id: z.boolean().optional(),
  email: z.boolean().optional(),
  telephone: z.boolean().optional(),
  telephone_code: z.boolean().optional(),
  telephone_number: z.boolean().optional(),
  website_url: z.boolean().optional(),
  working_hours: z.boolean().optional(),
  seats: z.boolean().optional(),
  minimum_order: z.boolean().optional(),
  offers_daily_meals: z.boolean().optional(),
  offers_daily_meals_on_weekend: z.boolean().optional(),
  popular: z.boolean().optional(),
  new: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  parent_business_id: z.boolean().optional(),
  reviewable_id: z.boolean().optional(),
  stripe_account_id: z.boolean().optional(),
  stripe_customer_id: z.boolean().optional(),
  word_buy_stripe_product_id: z.boolean().optional(),
  word_buy_stripe_subscription_id: z.boolean().optional(),
  daily_users_sorted: z.boolean().optional(),
  daily_users_sorting_type: z.boolean().optional(),
  restaurant_overwhelmed: z.boolean().optional(),
  first_activated_at: z.boolean().optional(),
  active: z.boolean().optional(),
  sales_representative_id: z.boolean().optional(),
  fiscal_devices_id: z.boolean().optional(),
  purchase_order_limit_amount: z.boolean().optional(),
  address: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  delivery_address: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  finances: z.union([z.boolean(),z.lazy(() => financesArgsSchema)]).optional(),
  business_users: z.union([z.boolean(),z.lazy(() => business_usersFindManyArgsSchema)]).optional(),
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  parent_business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  child_businesses: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  delivery_orders: z.union([z.boolean(),z.lazy(() => delivery_ordersFindManyArgsSchema)]).optional(),
  menus: z.union([z.boolean(),z.lazy(() => menusFindManyArgsSchema)]).optional(),
  reviewable: z.union([z.boolean(),z.lazy(() => reviewableArgsSchema)]).optional(),
  word_buy_stripe_product: z.union([z.boolean(),z.lazy(() => local_productsArgsSchema)]).optional(),
  word_buys: z.union([z.boolean(),z.lazy(() => word_buyFindManyArgsSchema)]).optional(),
  reservations: z.union([z.boolean(),z.lazy(() => reservationsFindManyArgsSchema)]).optional(),
  promo_sections: z.union([z.boolean(),z.lazy(() => promo_sections_buyFindManyArgsSchema)]).optional(),
  business_teams: z.union([z.boolean(),z.lazy(() => business_teamsFindManyArgsSchema)]).optional(),
  business_order_lobbies: z.union([z.boolean(),z.lazy(() => order_lobbiesFindManyArgsSchema)]).optional(),
  user_favorite_businesses: z.union([z.boolean(),z.lazy(() => user_favorite_businessesFindManyArgsSchema)]).optional(),
  scoring_points: z.union([z.boolean(),z.lazy(() => scoring_pointsFindManyArgsSchema)]).optional(),
  daily_meal_drivers: z.union([z.boolean(),z.lazy(() => delivery_driversFindManyArgsSchema)]).optional(),
  late_events: z.union([z.boolean(),z.lazy(() => late_eventsFindManyArgsSchema)]).optional(),
  fiscal_device: z.union([z.boolean(),z.lazy(() => fiscal_devicesArgsSchema)]).optional(),
  daily_meals_subscribers: z.union([z.boolean(),z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)]).optional(),
  account_actions: z.union([z.boolean(),z.lazy(() => account_actionsFindManyArgsSchema)]).optional(),
  business_clients: z.union([z.boolean(),z.lazy(() => business_clientsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BusinessCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const businessUpsertArgsSchema: z.ZodType<Prisma.businessUpsertArgs> = z.object({
  select: businessSelectSchema.optional(),
  include: businessIncludeSchema.optional(),
  where: businessWhereUniqueInputSchema,
  create: z.union([ businessCreateInputSchema,businessUncheckedCreateInputSchema ]),
  update: z.union([ businessUpdateInputSchema,businessUncheckedUpdateInputSchema ]),
}).strict() ;

export default businessUpsertArgsSchema;
