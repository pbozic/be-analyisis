import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusiness_usersInputSchema } from './taxi_ordersCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema } from './taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema';
import { taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema } from './taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUpdateManyWithoutBusiness_usersNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithoutBusiness_usersNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusiness_usersInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_usersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_usersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusiness_usersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUpdateManyWithoutBusiness_usersNestedInputSchema;
