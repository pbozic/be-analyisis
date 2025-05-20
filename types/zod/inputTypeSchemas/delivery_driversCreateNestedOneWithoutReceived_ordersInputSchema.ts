import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutReceived_ordersInputSchema } from './delivery_driversCreateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema } from './delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutReceived_ordersInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutReceived_ordersInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutReceived_ordersInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional()
}).strict();

export default delivery_driversCreateNestedOneWithoutReceived_ordersInputSchema;
