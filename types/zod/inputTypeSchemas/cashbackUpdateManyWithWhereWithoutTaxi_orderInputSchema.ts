import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';
import { cashbackUpdateManyMutationInputSchema } from './cashbackUpdateManyMutationInputSchema';
import { cashbackUncheckedUpdateManyWithoutTaxi_orderInputSchema } from './cashbackUncheckedUpdateManyWithoutTaxi_orderInputSchema';

export const cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackUpdateManyWithWhereWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => cashbackScalarWhereInputSchema),
  data: z.union([ z.lazy(() => cashbackUpdateManyMutationInputSchema),z.lazy(() => cashbackUncheckedUpdateManyWithoutTaxi_orderInputSchema) ]),
}).strict();

export default cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema;
