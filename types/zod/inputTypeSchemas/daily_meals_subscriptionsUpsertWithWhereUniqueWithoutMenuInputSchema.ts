import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutMenuInputSchema } from './daily_meals_subscriptionsUpdateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema';

export const daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutMenuInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutMenuInputSchema) ]),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutMenuInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpsertWithWhereUniqueWithoutMenuInputSchema;
