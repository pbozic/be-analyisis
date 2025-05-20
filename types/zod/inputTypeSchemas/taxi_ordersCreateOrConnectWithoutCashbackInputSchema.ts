import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutCashbackInputSchema } from './taxi_ordersCreateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedCreateWithoutCashbackInputSchema } from './taxi_ordersUncheckedCreateWithoutCashbackInputSchema';

export const taxi_ordersCreateOrConnectWithoutCashbackInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutCashbackInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutCashbackInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutCashbackInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutCashbackInputSchema;
