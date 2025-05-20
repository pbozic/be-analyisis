import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutHistoryInputSchema } from './taxi_ordersCreateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedCreateWithoutHistoryInputSchema } from './taxi_ordersUncheckedCreateWithoutHistoryInputSchema';
import { taxi_ordersCreateOrConnectWithoutHistoryInputSchema } from './taxi_ordersCreateOrConnectWithoutHistoryInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutHistoryInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional()
}).strict();

export default taxi_ordersCreateNestedOneWithoutHistoryInputSchema;
