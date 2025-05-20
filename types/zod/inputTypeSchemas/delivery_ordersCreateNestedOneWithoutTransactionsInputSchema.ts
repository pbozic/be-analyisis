import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutTransactionsInputSchema } from './delivery_ordersCreateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedCreateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { delivery_ordersCreateOrConnectWithoutTransactionsInputSchema } from './delivery_ordersCreateOrConnectWithoutTransactionsInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutTransactionsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutTransactionsInputSchema;
