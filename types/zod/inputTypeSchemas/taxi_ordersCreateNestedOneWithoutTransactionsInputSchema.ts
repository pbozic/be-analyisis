import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutTransactionsInputSchema } from './taxi_ordersCreateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedCreateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { taxi_ordersCreateOrConnectWithoutTransactionsInputSchema } from './taxi_ordersCreateOrConnectWithoutTransactionsInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional()
}).strict();

export default taxi_ordersCreateNestedOneWithoutTransactionsInputSchema;
