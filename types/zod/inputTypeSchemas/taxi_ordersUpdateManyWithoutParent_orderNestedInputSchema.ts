import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutParent_orderInputSchema } from './taxi_ordersCreateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedCreateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedCreateWithoutParent_orderInputSchema';
import { taxi_ordersCreateOrConnectWithoutParent_orderInputSchema } from './taxi_ordersCreateOrConnectWithoutParent_orderInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema';
import { taxi_ordersCreateManyParent_orderInputEnvelopeSchema } from './taxi_ordersCreateManyParent_orderInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUpdateManyWithoutParent_orderNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithoutParent_orderNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutParent_orderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyParent_orderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUpdateManyWithoutParent_orderNestedInputSchema;
