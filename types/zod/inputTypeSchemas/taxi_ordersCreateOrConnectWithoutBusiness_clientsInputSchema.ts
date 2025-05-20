import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema';

export const taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutBusiness_clientsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema;
