import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsCreateWithoutTaxi_orderInputSchema } from './transactionsCreateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedCreateWithoutTaxi_orderInputSchema } from './transactionsUncheckedCreateWithoutTaxi_orderInputSchema';

export const transactionsCreateOrConnectWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsCreateOrConnectWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => transactionsCreateWithoutTaxi_orderInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutTaxi_orderInputSchema) ]),
}).strict();

export default transactionsCreateOrConnectWithoutTaxi_orderInputSchema;
