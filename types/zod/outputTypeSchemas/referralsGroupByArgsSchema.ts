import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsWhereInputSchema } from '../inputTypeSchemas/referralsWhereInputSchema'
import { referralsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/referralsOrderByWithAggregationInputSchema'
import { ReferralsScalarFieldEnumSchema } from '../inputTypeSchemas/ReferralsScalarFieldEnumSchema'
import { referralsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/referralsScalarWhereWithAggregatesInputSchema'

export const referralsGroupByArgsSchema: z.ZodType<Prisma.referralsGroupByArgs> = z.object({
  where: referralsWhereInputSchema.optional(),
  orderBy: z.union([ referralsOrderByWithAggregationInputSchema.array(),referralsOrderByWithAggregationInputSchema ]).optional(),
  by: ReferralsScalarFieldEnumSchema.array(),
  having: referralsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default referralsGroupByArgsSchema;
