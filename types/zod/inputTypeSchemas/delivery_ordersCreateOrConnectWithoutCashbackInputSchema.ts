import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutCashbackInputSchema } from './delivery_ordersCreateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedCreateWithoutCashbackInputSchema } from './delivery_ordersUncheckedCreateWithoutCashbackInputSchema';

export const delivery_ordersCreateOrConnectWithoutCashbackInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutCashbackInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutCashbackInputSchema) ]),
}).strict();

export default delivery_ordersCreateOrConnectWithoutCashbackInputSchema;
