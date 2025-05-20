import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsCreateWithoutDelivery_orderInputSchema } from './transactionsCreateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedCreateWithoutDelivery_orderInputSchema } from './transactionsUncheckedCreateWithoutDelivery_orderInputSchema';

export const transactionsCreateOrConnectWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsCreateOrConnectWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default transactionsCreateOrConnectWithoutDelivery_orderInputSchema;
