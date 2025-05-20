import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutAddressInputSchema } from './daily_meals_subscriptionsUpdateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema';

export const daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutAddressInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpdateWithWhereUniqueWithoutAddressInputSchema;
