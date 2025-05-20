import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsWhereInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereInputSchema'
import { daily_meals_subscriptionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsOrderByWithRelationInputSchema'
import { daily_meals_subscriptionsWhereUniqueInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereUniqueInputSchema'

export const daily_meals_subscriptionsAggregateArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsAggregateArgs> = z.object({
  where: daily_meals_subscriptionsWhereInputSchema.optional(),
  orderBy: z.union([ daily_meals_subscriptionsOrderByWithRelationInputSchema.array(),daily_meals_subscriptionsOrderByWithRelationInputSchema ]).optional(),
  cursor: daily_meals_subscriptionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default daily_meals_subscriptionsAggregateArgsSchema;
