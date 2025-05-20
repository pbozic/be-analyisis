import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutDelivery_orderInputSchema } from './transactionsUpdateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedUpdateWithoutDelivery_orderInputSchema } from './transactionsUncheckedUpdateWithoutDelivery_orderInputSchema';
import { transactionsCreateWithoutDelivery_orderInputSchema } from './transactionsCreateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedCreateWithoutDelivery_orderInputSchema } from './transactionsUncheckedCreateWithoutDelivery_orderInputSchema';

export const transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsUpsertWithWhereUniqueWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => transactionsUpdateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutDelivery_orderInputSchema) ]),
  create: z.union([ z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema;
