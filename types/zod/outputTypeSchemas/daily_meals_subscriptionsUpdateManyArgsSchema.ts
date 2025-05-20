import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { daily_meals_subscriptionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsUpdateManyMutationInputSchema'
import { daily_meals_subscriptionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsUncheckedUpdateManyInputSchema'
import { daily_meals_subscriptionsWhereInputSchema } from '../inputTypeSchemas/daily_meals_subscriptionsWhereInputSchema'

export const daily_meals_subscriptionsUpdateManyArgsSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateManyArgs> = z.object({
  data: z.union([ daily_meals_subscriptionsUpdateManyMutationInputSchema,daily_meals_subscriptionsUncheckedUpdateManyInputSchema ]),
  where: daily_meals_subscriptionsWhereInputSchema.optional(),
}).strict() ;

export default daily_meals_subscriptionsUpdateManyArgsSchema;
