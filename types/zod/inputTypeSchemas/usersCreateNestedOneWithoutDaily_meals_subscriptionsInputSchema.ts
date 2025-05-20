import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutDaily_meals_subscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutDaily_meals_subscriptionsInputSchema;
