import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesIncludeSchema } from '../inputTypeSchemas/addressesIncludeSchema'
import { addressesWhereInputSchema } from '../inputTypeSchemas/addressesWhereInputSchema'
import { addressesOrderByWithRelationInputSchema } from '../inputTypeSchemas/addressesOrderByWithRelationInputSchema'
import { addressesWhereUniqueInputSchema } from '../inputTypeSchemas/addressesWhereUniqueInputSchema'
import { AddressesScalarFieldEnumSchema } from '../inputTypeSchemas/AddressesScalarFieldEnumSchema'
import { user_addressFindManyArgsSchema } from "../outputTypeSchemas/user_addressFindManyArgsSchema"
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { business_usersFindManyArgsSchema } from "../outputTypeSchemas/business_usersFindManyArgsSchema"
import { daily_meals_subscriptionsFindManyArgsSchema } from "../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema"
import { AddressesCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const addressesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.addressesFindFirstOrThrowArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithRelationInputSchema.array(),addressesOrderByWithRelationInputSchema ]).optional(),
  cursor: addressesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressesScalarFieldEnumSchema,AddressesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default addressesFindFirstOrThrowArgsSchema;
