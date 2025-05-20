import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusiness_usersInputSchema } from './taxi_ordersUpdateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema';
import { taxi_ordersCreateWithoutBusiness_usersInputSchema } from './taxi_ordersCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema) ]),
}).strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema;
