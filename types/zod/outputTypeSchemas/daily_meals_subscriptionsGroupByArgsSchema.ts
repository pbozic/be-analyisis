import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsWhereInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereInputSchema'
import { daily_meals_subscriptionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsOrderByWithAggregationInputSchema'
import { Daily_meals_subscriptionsScalarFieldEnumSchema } from '../inputTypeSchemas/Daily_meals_subscriptionsScalarFieldEnumSchema'
import { daily_meals_subscriptionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsScalarWhereWithAggregatesInputSchema'

export const daily_meals_subscriptionsGroupByArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsGroupByArgs> = z.object({
  where: daily_meals_subscriptionsWhereInputSchema.optional(),
  orderBy: z.union([ daily_meals_subscriptionsOrderByWithAggregationInputSchema.array(),daily_meals_subscriptionsOrderByWithAggregationInputSchema ]).optional(),
  by: Daily_meals_subscriptionsScalarFieldEnumSchema.array(),
  having: daily_meals_subscriptionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default daily_meals_subscriptionsGroupByArgsSchema;
