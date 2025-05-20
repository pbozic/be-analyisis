import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';

export const addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutDaily_meals_subscriptionsInput> = z.object({
  where: z.lazy(() => addressesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => addressesCreateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema) ]),
}).strict();

export default addressesCreateOrConnectWithoutDaily_meals_subscriptionsInputSchema;
