import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutWallet_fundsInputSchema } from './transactionsUpdateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedUpdateWithoutWallet_fundsInputSchema } from './transactionsUncheckedUpdateWithoutWallet_fundsInputSchema';

export const transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema: z.ZodType<Prisma.transactionsUpdateWithWhereUniqueWithoutWallet_fundsInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => transactionsUpdateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutWallet_fundsInputSchema) ]),
}).strict();

export default transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema;
