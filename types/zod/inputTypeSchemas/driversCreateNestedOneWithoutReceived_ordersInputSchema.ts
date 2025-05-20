import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutReceived_ordersInputSchema } from './driversCreateWithoutReceived_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { driversCreateOrConnectWithoutReceived_ordersInputSchema } from './driversCreateOrConnectWithoutReceived_ordersInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutReceived_ordersInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutReceived_ordersInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutReceived_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutReceived_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutReceived_ordersInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutReceived_ordersInputSchema;
