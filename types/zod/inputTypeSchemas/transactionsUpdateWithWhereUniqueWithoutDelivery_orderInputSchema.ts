import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutDelivery_orderInputSchema } from './transactionsUpdateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedUpdateWithoutDelivery_orderInputSchema } from './transactionsUncheckedUpdateWithoutDelivery_orderInputSchema';

export const transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsUpdateWithWhereUniqueWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => transactionsUpdateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema;
