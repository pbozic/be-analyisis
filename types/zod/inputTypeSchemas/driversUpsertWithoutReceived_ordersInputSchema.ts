import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutReceived_ordersInputSchema } from './driversUpdateWithoutReceived_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_ordersInputSchema';
import { driversCreateWithoutReceived_ordersInputSchema } from './driversCreateWithoutReceived_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutReceived_ordersInputSchema: z.ZodType<Prisma.driversUpsertWithoutReceived_ordersInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutReceived_ordersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutReceived_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutReceived_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutReceived_ordersInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutReceived_ordersInputSchema;
