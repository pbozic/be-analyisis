import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';
import { daily_meals_subscriptionsUpdateManyMutationInputSchema } from './daily_meals_subscriptionsUpdateManyMutationInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuInputSchema';

export const daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateManyMutationInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpdateManyWithWhereWithoutMenuInputSchema;
