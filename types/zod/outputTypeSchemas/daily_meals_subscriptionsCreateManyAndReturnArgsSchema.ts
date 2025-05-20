import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsCreateManyInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsCreateManyInputSchema'

export const daily_meals_subscriptionsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyAndReturnArgs> = z.object({
  data: z.union([ daily_meals_subscriptionsCreateManyInputSchema,daily_meals_subscriptionsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default daily_meals_subscriptionsCreateManyAndReturnArgsSchema;
