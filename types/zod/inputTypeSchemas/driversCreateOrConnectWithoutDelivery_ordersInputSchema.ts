import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutDelivery_ordersInputSchema } from './driversCreateWithoutDelivery_ordersInputSchema';
import { driversUncheckedCreateWithoutDelivery_ordersInputSchema } from './driversUncheckedCreateWithoutDelivery_ordersInputSchema';

export const driversCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driversCreateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default driversCreateOrConnectWithoutDelivery_ordersInputSchema;
