import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutBusiness_usersInputSchema } from './taxi_ordersCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema';

export const taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutBusiness_usersInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema;
