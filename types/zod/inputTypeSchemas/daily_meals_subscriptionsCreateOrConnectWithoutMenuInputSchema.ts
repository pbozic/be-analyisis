import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateWithoutMenuInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema';

export const daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateOrConnectWithoutMenuInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutMenuInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenuInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsCreateOrConnectWithoutMenuInputSchema;
