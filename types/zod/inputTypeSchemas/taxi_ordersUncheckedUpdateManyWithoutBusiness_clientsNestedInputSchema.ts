import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema } from './taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsNestedInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsNestedInputSchema;
