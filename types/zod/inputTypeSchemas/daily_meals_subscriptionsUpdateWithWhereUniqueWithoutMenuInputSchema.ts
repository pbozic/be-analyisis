import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutMenuInputSchema } from './daily_meals_subscriptionsUpdateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema';

export const daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutMenuInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenuInputSchema;
