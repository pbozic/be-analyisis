import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';

export const usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutDaily_meals_subscriptionsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema;
