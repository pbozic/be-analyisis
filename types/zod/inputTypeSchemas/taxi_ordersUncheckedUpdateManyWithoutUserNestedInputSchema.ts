import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutUserInputSchema } from './taxi_ordersCreateWithoutUserInputSchema';
import { taxi_ordersUncheckedCreateWithoutUserInputSchema } from './taxi_ordersUncheckedCreateWithoutUserInputSchema';
import { taxi_ordersCreateOrConnectWithoutUserInputSchema } from './taxi_ordersCreateOrConnectWithoutUserInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema';
import { taxi_ordersCreateManyUserInputEnvelopeSchema } from './taxi_ordersCreateManyUserInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutUserInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutUserInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutUserInputSchema),z.lazy(() => taxi_ordersCreateWithoutUserInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutUserInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUncheckedUpdateManyWithoutUserNestedInputSchema;
