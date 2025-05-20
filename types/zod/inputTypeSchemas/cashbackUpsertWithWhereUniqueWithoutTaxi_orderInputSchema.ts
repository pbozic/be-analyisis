import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithoutTaxi_orderInputSchema } from './cashbackUpdateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedUpdateWithoutTaxi_orderInputSchema } from './cashbackUncheckedUpdateWithoutTaxi_orderInputSchema';
import { cashbackCreateWithoutTaxi_orderInputSchema } from './cashbackCreateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedCreateWithoutTaxi_orderInputSchema } from './cashbackUncheckedCreateWithoutTaxi_orderInputSchema';

export const cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackUpsertWithWhereUniqueWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => cashbackWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => cashbackUpdateWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUncheckedUpdateWithoutTaxi_orderInputSchema) ]),
  create: z.union([ z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema) ]),
}).strict();

export default cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema;
