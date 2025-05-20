import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutHistoryInputSchema } from './delivery_ordersCreateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedCreateWithoutHistoryInputSchema } from './delivery_ordersUncheckedCreateWithoutHistoryInputSchema';

export const delivery_ordersCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutHistoryInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutHistoryInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutHistoryInputSchema) ]),
}).strict();

export default delivery_ordersCreateOrConnectWithoutHistoryInputSchema;
