import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsWhereInputSchema } from '../inputTypeSchemas/business_teamsWhereInputSchema'
import { business_teamsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/business_teamsOrderByWithAggregationInputSchema'
import { Business_teamsScalarFieldEnumSchema } from '../inputTypeSchemas/Business_teamsScalarFieldEnumSchema'
import { business_teamsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/business_teamsScalarWhereWithAggregatesInputSchema'

export const business_teamsGroupByArgsSchema: z.ZodType<Prisma.business_teamsGroupByArgs> = z.object({
  where: business_teamsWhereInputSchema.optional(),
  orderBy: z.union([ business_teamsOrderByWithAggregationInputSchema.array(),business_teamsOrderByWithAggregationInputSchema ]).optional(),
  by: Business_teamsScalarFieldEnumSchema.array(),
  having: business_teamsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default business_teamsGroupByArgsSchema;
