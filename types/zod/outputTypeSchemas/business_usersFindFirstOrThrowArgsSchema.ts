import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersIncludeSchema } from '../inputTypeSchemas/business_usersIncludeSchema'
import { business_usersWhereInputSchema } from '../inputTypeSchemas/business_usersWhereInputSchema'
import { business_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_usersOrderByWithRelationInputSchema'
import { business_usersWhereUniqueInputSchema } from '../inputTypeSchemas/business_usersWhereUniqueInputSchema'
import { Business_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Business_usersScalarFieldEnumSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { addressesArgsSchema } from "../outputTypeSchemas/addressesArgsSchema"
import { allowancesArgsSchema } from "../outputTypeSchemas/allowancesArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { Business_usersCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_usersCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const business_usersSelectSchema: z.ZodType<Prisma.business_usersSelect> = z.object({
  business_users_id: z.boolean().optional(),
  online: z.boolean().optional(),
  company_role: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  operating_address_id: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  operating_address: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  allowance: z.union([z.boolean(),z.lazy(() => allowancesArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_usersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const business_usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.business_usersFindFirstOrThrowArgs> = z.object({
  select: business_usersSelectSchema.optional(),
  include: business_usersIncludeSchema.optional(),
  where: business_usersWhereInputSchema.optional(),
  orderBy: z.union([ business_usersOrderByWithRelationInputSchema.array(),business_usersOrderByWithRelationInputSchema ]).optional(),
  cursor: business_usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Business_usersScalarFieldEnumSchema,Business_usersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default business_usersFindFirstOrThrowArgsSchema;
