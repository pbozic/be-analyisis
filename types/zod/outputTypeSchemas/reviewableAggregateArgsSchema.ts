import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableWhereInputSchema } from '../inputTypeSchemas/reviewableWhereInputSchema'
import { reviewableOrderByWithRelationInputSchema } from '../inputTypeSchemas/reviewableOrderByWithRelationInputSchema'
import { reviewableWhereUniqueInputSchema } from '../inputTypeSchemas/reviewableWhereUniqueInputSchema'

export const reviewableAggregateArgsSchema: z.ZodType<Prisma.reviewableAggregateArgs> = z.object({
  where: reviewableWhereInputSchema.optional(),
  orderBy: z.union([ reviewableOrderByWithRelationInputSchema.array(),reviewableOrderByWithRelationInputSchema ]).optional(),
  cursor: reviewableWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default reviewableAggregateArgsSchema;
