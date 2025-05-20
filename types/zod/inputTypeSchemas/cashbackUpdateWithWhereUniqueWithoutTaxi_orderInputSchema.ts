import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutTaxi_orderInputSchema } from './cashbackUpdateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedUpdateWithoutTaxi_orderInputSchema } from './cashbackUncheckedUpdateWithoutTaxi_orderInputSchema';

export const cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackUpdateWithWhereUniqueWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => cashbackWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => cashbackUpdateWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUncheckedUpdateWithoutTaxi_orderInputSchema) ]),
}).strict();

export default cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema;
