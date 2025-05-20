import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema';
import { usersUpsertWithoutDaily_meals_subscriptionsInputSchema } from './usersUpsertWithoutDaily_meals_subscriptionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema } from './usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema';
import { usersUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';

export const usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutDaily_meals_subscriptionsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUpdateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutDaily_meals_subscriptionsNestedInputSchema;
