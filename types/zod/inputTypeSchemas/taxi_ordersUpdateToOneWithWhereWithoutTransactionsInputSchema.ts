import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutTransactionsInputSchema } from './taxi_ordersUpdateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutTransactionsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default taxi_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema;
