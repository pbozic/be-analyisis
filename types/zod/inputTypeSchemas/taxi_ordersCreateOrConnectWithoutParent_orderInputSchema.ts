import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutParent_orderInputSchema } from './taxi_ordersCreateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedCreateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedCreateWithoutParent_orderInputSchema';

export const taxi_ordersCreateOrConnectWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutParent_orderInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutParent_orderInputSchema;
