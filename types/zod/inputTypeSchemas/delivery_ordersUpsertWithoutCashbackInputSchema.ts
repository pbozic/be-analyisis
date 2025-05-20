import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutCashbackInputSchema } from './delivery_ordersUpdateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedUpdateWithoutCashbackInputSchema } from './delivery_ordersUncheckedUpdateWithoutCashbackInputSchema';
import { delivery_ordersCreateWithoutCashbackInputSchema } from './delivery_ordersCreateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedCreateWithoutCashbackInputSchema } from './delivery_ordersUncheckedCreateWithoutCashbackInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutCashbackInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutCashbackInput> = z.object({
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutCashbackInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutCashbackInputSchema) ]),
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional()
}).strict();

export default delivery_ordersUpsertWithoutCashbackInputSchema;
