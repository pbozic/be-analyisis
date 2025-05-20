import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsUpdateWithoutTransactionsInputSchema } from './wallet_fundsUpdateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema';
import { wallet_fundsCreateWithoutTransactionsInputSchema } from './wallet_fundsCreateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedCreateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedCreateWithoutTransactionsInputSchema';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';

export const wallet_fundsUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.wallet_fundsUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => wallet_fundsUpdateWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => wallet_fundsCreateWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => wallet_fundsWhereInputSchema).optional()
}).strict();

export default wallet_fundsUpsertWithoutTransactionsInputSchema;
