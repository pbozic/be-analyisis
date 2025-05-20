import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutReceived_ordersInputSchema } from './delivery_driversCreateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema';

export const delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutReceived_ordersInput> = z.object({
  where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutReceived_ordersInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema) ]),
}).strict();

export default delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema;
