import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutDriverInputSchema } from './taxi_ordersCreateWithoutDriverInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriverInputSchema } from './taxi_ordersUncheckedCreateWithoutDriverInputSchema';

export const taxi_ordersCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutDriverInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutDriverInputSchema;
