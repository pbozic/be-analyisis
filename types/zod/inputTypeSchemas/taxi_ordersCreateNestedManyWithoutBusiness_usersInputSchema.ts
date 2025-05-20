import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusiness_usersInputSchema } from './taxi_ordersCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema } from './taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema';
import { taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema } from './taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedManyWithoutBusiness_usersInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedManyWithoutBusiness_usersInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersCreateNestedManyWithoutBusiness_usersInputSchema;
