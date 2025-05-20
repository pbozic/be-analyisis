import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutTransactionsInputSchema } from './taxi_ordersCreateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedCreateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { taxi_ordersCreateOrConnectWithoutTransactionsInputSchema } from './taxi_ordersCreateOrConnectWithoutTransactionsInputSchema';
import { taxi_ordersUpsertWithoutTransactionsInputSchema } from './taxi_ordersUpsertWithoutTransactionsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema';
import { taxi_ordersUpdateWithoutTransactionsInputSchema } from './taxi_ordersUpdateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema';

export const taxi_ordersUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => taxi_ordersUpsertWithoutTransactionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUpdateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export default taxi_ordersUpdateOneWithoutTransactionsNestedInputSchema;
