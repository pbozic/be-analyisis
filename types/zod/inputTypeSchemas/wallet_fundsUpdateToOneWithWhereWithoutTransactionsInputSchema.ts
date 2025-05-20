import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';
import { wallet_fundsUpdateWithoutTransactionsInputSchema } from './wallet_fundsUpdateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema';

export const wallet_fundsUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.wallet_fundsUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => wallet_fundsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => wallet_fundsUpdateWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default wallet_fundsUpdateToOneWithWhereWithoutTransactionsInputSchema;
