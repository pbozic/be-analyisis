import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUpdateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema';

export const daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpsertWithWhereUniqueWithoutBusinessInputSchema;
