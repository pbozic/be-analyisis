import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema';

export const daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutAddressInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsCreateOrConnectWithoutAddressInputSchema;
