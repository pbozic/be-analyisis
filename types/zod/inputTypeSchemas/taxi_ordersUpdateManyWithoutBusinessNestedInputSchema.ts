import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusinessInputSchema } from './taxi_ordersCreateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusinessInputSchema } from './taxi_ordersUncheckedCreateWithoutBusinessInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusinessInputSchema } from './taxi_ordersCreateOrConnectWithoutBusinessInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { taxi_ordersCreateManyBusinessInputEnvelopeSchema } from './taxi_ordersCreateManyBusinessInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUpdateManyWithoutBusinessNestedInputSchema;
