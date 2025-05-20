import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutCashbackInputSchema } from './taxi_ordersUpdateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedUpdateWithoutCashbackInputSchema } from './taxi_ordersUncheckedUpdateWithoutCashbackInputSchema';
import { taxi_ordersCreateWithoutCashbackInputSchema } from './taxi_ordersCreateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedCreateWithoutCashbackInputSchema } from './taxi_ordersUncheckedCreateWithoutCashbackInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutCashbackInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutCashbackInput> = z.object({
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutCashbackInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutCashbackInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutCashbackInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutCashbackInputSchema) ]),
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional()
}).strict();

export default taxi_ordersUpsertWithoutCashbackInputSchema;
