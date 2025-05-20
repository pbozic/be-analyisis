import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutHistoryInputSchema } from './delivery_ordersCreateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedCreateWithoutHistoryInputSchema } from './delivery_ordersUncheckedCreateWithoutHistoryInputSchema';
import { delivery_ordersCreateOrConnectWithoutHistoryInputSchema } from './delivery_ordersCreateOrConnectWithoutHistoryInputSchema';
import { delivery_ordersUpsertWithoutHistoryInputSchema } from './delivery_ordersUpsertWithoutHistoryInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutHistoryInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutHistoryInputSchema';
import { delivery_ordersUpdateWithoutHistoryInputSchema } from './delivery_ordersUpdateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedUpdateWithoutHistoryInputSchema } from './delivery_ordersUncheckedUpdateWithoutHistoryInputSchema';

export const delivery_ordersUpdateOneWithoutHistoryNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutHistoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutHistoryInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutHistoryInputSchema).optional(),
  upsert: z.lazy(() => delivery_ordersUpsertWithoutHistoryInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutHistoryInputSchema),z.lazy(() => delivery_ordersUpdateWithoutHistoryInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutHistoryInputSchema) ]).optional(),
}).strict();

export default delivery_ordersUpdateOneWithoutHistoryNestedInputSchema;
