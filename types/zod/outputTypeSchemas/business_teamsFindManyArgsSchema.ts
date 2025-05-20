import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsIncludeSchema } from '../inputTypeSchemas/business_teamsIncludeSchema'
import { business_teamsWhereInputSchema } from '../inputTypeSchemas/business_teamsWhereInputSchema'
import { business_teamsOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_teamsOrderByWithRelationInputSchema'
import { business_teamsWhereUniqueInputSchema } from '../inputTypeSchemas/business_teamsWhereUniqueInputSchema'
import { Business_teamsScalarFieldEnumSchema } from '../inputTypeSchemas/Business_teamsScalarFieldEnumSchema'
import { usersFindManyArgsSchema } from "../outputTypeSchemas/usersFindManyArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { Business_teamsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_teamsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const business_teamsSelectSchema: z.ZodType<Prisma.business_teamsSelect> = z.object({
  business_teams_id: z.boolean().optional(),
  team_name: z.boolean().optional(),
  business_id: z.boolean().optional(),
  limit_per_person: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersFindManyArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_teamsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const business_teamsFindManyArgsSchema: z.ZodType<Prisma.business_teamsFindManyArgs> = z.object({
  select: business_teamsSelectSchema.optional(),
  include: business_teamsIncludeSchema.optional(),
  where: business_teamsWhereInputSchema.optional(),
  orderBy: z.union([ business_teamsOrderByWithRelationInputSchema.array(),business_teamsOrderByWithRelationInputSchema ]).optional(),
  cursor: business_teamsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Business_teamsScalarFieldEnumSchema,Business_teamsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default business_teamsFindManyArgsSchema;
