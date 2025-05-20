import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutReceived_ordersInputSchema } from './driversCreateWithoutReceived_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { driversCreateOrConnectWithoutReceived_ordersInputSchema } from './driversCreateOrConnectWithoutReceived_ordersInputSchema';
import { driversUpsertWithoutReceived_ordersInputSchema } from './driversUpsertWithoutReceived_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema } from './driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema';
import { driversUpdateWithoutReceived_ordersInputSchema } from './driversUpdateWithoutReceived_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_ordersInputSchema';

export const driversUpdateOneWithoutReceived_ordersNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutReceived_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutReceived_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutReceived_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutReceived_ordersInputSchema).optional(),
  upsert: z.lazy(() => driversUpsertWithoutReceived_ordersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema),z.lazy(() => driversUpdateWithoutReceived_ordersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutReceived_ordersInputSchema) ]).optional(),
}).strict();

export default driversUpdateOneWithoutReceived_ordersNestedInputSchema;
