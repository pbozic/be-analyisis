import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutHistoryInputSchema } from './taxi_ordersCreateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedCreateWithoutHistoryInputSchema } from './taxi_ordersUncheckedCreateWithoutHistoryInputSchema';

export const taxi_ordersCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutHistoryInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutHistoryInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutHistoryInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutHistoryInputSchema;
