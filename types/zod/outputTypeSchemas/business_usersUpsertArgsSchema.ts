import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersIncludeSchema } from '../inputTypeSchemas/business_usersIncludeSchema'
import { business_usersWhereUniqueInputSchema } from '../inputTypeSchemas/business_usersWhereUniqueInputSchema'
import { business_usersCreateInputSchema } from '../inputTypeSchemas/business_usersCreateInputSchema'
import { business_usersUncheckedCreateInputSchema } from '../inputTypeSchemas/business_usersUncheckedCreateInputSchema'
import { business_usersUpdateInputSchema } from '../inputTypeSchemas/business_usersUpdateInputSchema'
import { business_usersUncheckedUpdateInputSchema } from '../inputTypeSchemas/business_usersUncheckedUpdateInputSchema'
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

export const business_usersUpsertArgsSchema: z.ZodType<Prisma.business_usersUpsertArgs> = z.object({
  select: business_usersSelectSchema.optional(),
  include: business_usersIncludeSchema.optional(),
  where: business_usersWhereUniqueInputSchema,
  create: z.union([ business_usersCreateInputSchema,business_usersUncheckedCreateInputSchema ]),
  update: z.union([ business_usersUpdateInputSchema,business_usersUncheckedUpdateInputSchema ]),
}).strict() ;

export default business_usersUpsertArgsSchema;
