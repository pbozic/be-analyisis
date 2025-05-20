import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsCreateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema';

export const daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutBusinessInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsCreateOrConnectWithoutBusinessInputSchema;
