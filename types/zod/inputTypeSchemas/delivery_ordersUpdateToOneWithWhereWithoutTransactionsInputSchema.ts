import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutTransactionsInputSchema } from './delivery_ordersUpdateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutTransactionsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema;
