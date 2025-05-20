import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableWhereInputSchema } from '../inputTypeSchemas/reviewableWhereInputSchema'
import { reviewableOrderByWithAggregationInputSchema } from '../inputTypeSchemas/reviewableOrderByWithAggregationInputSchema'
import { ReviewableScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewableScalarFieldEnumSchema'
import { reviewableScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/reviewableScalarWhereWithAggregatesInputSchema'

export const reviewableGroupByArgsSchema: z.ZodType<Prisma.reviewableGroupByArgs> = z.object({
  where: reviewableWhereInputSchema.optional(),
  orderBy: z.union([ reviewableOrderByWithAggregationInputSchema.array(),reviewableOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewableScalarFieldEnumSchema.array(),
  having: reviewableScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default reviewableGroupByArgsSchema;
