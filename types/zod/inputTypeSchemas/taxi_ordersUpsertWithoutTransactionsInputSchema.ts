import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutTransactionsInputSchema } from './taxi_ordersUpdateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema';
import { taxi_ordersCreateWithoutTransactionsInputSchema } from './taxi_ordersCreateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedCreateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional()
}).strict();

export default taxi_ordersUpsertWithoutTransactionsInputSchema;
