import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutTransactionsInputSchema } from './wallet_fundsCreateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedCreateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedCreateWithoutTransactionsInputSchema';
import { wallet_fundsCreateOrConnectWithoutTransactionsInputSchema } from './wallet_fundsCreateOrConnectWithoutTransactionsInputSchema';
import { wallet_fundsUpsertWithoutTransactionsInputSchema } from './wallet_fundsUpsertWithoutTransactionsInputSchema';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateToOneWithWhereWithoutTransactionsInputSchema } from './wallet_fundsUpdateToOneWithWhereWithoutTransactionsInputSchema';
import { wallet_fundsUpdateWithoutTransactionsInputSchema } from './wallet_fundsUpdateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema';

export const wallet_fundsUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.wallet_fundsUpdateOneWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => wallet_fundsCreateWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => wallet_fundsCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => wallet_fundsUpsertWithoutTransactionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => wallet_fundsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => wallet_fundsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => wallet_fundsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => wallet_fundsUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUpdateWithoutTransactionsInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export default wallet_fundsUpdateOneWithoutTransactionsNestedInputSchema;
