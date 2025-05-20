import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressFindManyArgsSchema } from "../outputTypeSchemas/user_addressFindManyArgsSchema"
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { business_usersFindManyArgsSchema } from "../outputTypeSchemas/business_usersFindManyArgsSchema"
import { daily_meals_subscriptionsFindManyArgsSchema } from "../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema"
import { AddressesCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressesCountOutputTypeArgsSchema"

export const addressesSelectSchema: z.ZodType<Prisma.addressesSelect> = z.object({
  address_id: z.boolean().optional(),
  address: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  street: z.boolean().optional(),
  house_number: z.boolean().optional(),
  city: z.boolean().optional(),
  country: z.boolean().optional(),
  postal: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => user_addressFindManyArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  businesses_delivery_address: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  business_users: z.union([z.boolean(),z.lazy(() => business_usersFindManyArgsSchema)]).optional(),
  daily_meals_subscriptions: z.union([z.boolean(),z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default addressesSelectSchema;
