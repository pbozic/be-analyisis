import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutCashbackInputSchema } from './delivery_ordersCreateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedCreateWithoutCashbackInputSchema } from './delivery_ordersUncheckedCreateWithoutCashbackInputSchema';
import { delivery_ordersCreateOrConnectWithoutCashbackInputSchema } from './delivery_ordersCreateOrConnectWithoutCashbackInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutCashbackInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutCashbackInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutCashbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutCashbackInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutCashbackInputSchema;
