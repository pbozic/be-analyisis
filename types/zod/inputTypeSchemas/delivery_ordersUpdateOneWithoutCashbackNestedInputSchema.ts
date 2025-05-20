import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutCashbackInputSchema } from './delivery_ordersCreateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedCreateWithoutCashbackInputSchema } from './delivery_ordersUncheckedCreateWithoutCashbackInputSchema';
import { delivery_ordersCreateOrConnectWithoutCashbackInputSchema } from './delivery_ordersCreateOrConnectWithoutCashbackInputSchema';
import { delivery_ordersUpsertWithoutCashbackInputSchema } from './delivery_ordersUpsertWithoutCashbackInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutCashbackInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutCashbackInputSchema';
import { delivery_ordersUpdateWithoutCashbackInputSchema } from './delivery_ordersUpdateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedUpdateWithoutCashbackInputSchema } from './delivery_ordersUncheckedUpdateWithoutCashbackInputSchema';

export const delivery_ordersUpdateOneWithoutCashbackNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutCashbackNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutCashbackInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutCashbackInputSchema).optional(),
  upsert: z.lazy(() => delivery_ordersUpsertWithoutCashbackInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUpdateWithoutCashbackInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutCashbackInputSchema) ]).optional(),
}).strict();

export default delivery_ordersUpdateOneWithoutCashbackNestedInputSchema;
