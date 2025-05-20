import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutWallet_fundsInputSchema } from './transactionsUpdateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedUpdateWithoutWallet_fundsInputSchema } from './transactionsUncheckedUpdateWithoutWallet_fundsInputSchema';
import { transactionsCreateWithoutWallet_fundsInputSchema } from './transactionsCreateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedCreateWithoutWallet_fundsInputSchema } from './transactionsUncheckedCreateWithoutWallet_fundsInputSchema';

export const transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema: z.ZodType<Prisma.transactionsUpsertWithWhereUniqueWithoutWallet_fundsInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => transactionsUpdateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutWallet_fundsInputSchema) ]),
  create: z.union([ z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema) ]),
}).strict();

export default transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema;
