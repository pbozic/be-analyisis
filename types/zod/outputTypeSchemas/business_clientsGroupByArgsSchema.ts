import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsWhereInputSchema } from '../inputTypeSchemas/business_clientsWhereInputSchema'
import { business_clientsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/business_clientsOrderByWithAggregationInputSchema'
import { Business_clientsScalarFieldEnumSchema } from '../inputTypeSchemas/Business_clientsScalarFieldEnumSchema'
import { business_clientsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/business_clientsScalarWhereWithAggregatesInputSchema'

export const business_clientsGroupByArgsSchema: z.ZodType<Prisma.business_clientsGroupByArgs> = z.object({
  where: business_clientsWhereInputSchema.optional(),
  orderBy: z.union([ business_clientsOrderByWithAggregationInputSchema.array(),business_clientsOrderByWithAggregationInputSchema ]).optional(),
  by: Business_clientsScalarFieldEnumSchema.array(),
  having: business_clientsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default business_clientsGroupByArgsSchema;
