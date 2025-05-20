import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutUserInputSchema } from './daily_meals_subscriptionsUpdateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema';

export const daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutUserInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpdateWithWhereUniqueWithoutUserInputSchema;
