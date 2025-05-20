import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsCreateWithoutDriverInputSchema } from './driver_activity_logsCreateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedCreateWithoutDriverInputSchema } from './driver_activity_logsUncheckedCreateWithoutDriverInputSchema';
import { driver_activity_logsCreateOrConnectWithoutDriverInputSchema } from './driver_activity_logsCreateOrConnectWithoutDriverInputSchema';
import { driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema } from './driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema';
import { driver_activity_logsCreateManyDriverInputEnvelopeSchema } from './driver_activity_logsCreateManyDriverInputEnvelopeSchema';
import { driver_activity_logsWhereUniqueInputSchema } from './driver_activity_logsWhereUniqueInputSchema';
import { driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema } from './driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema';
import { driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema } from './driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema';
import { driver_activity_logsScalarWhereInputSchema } from './driver_activity_logsScalarWhereInputSchema';

export const driver_activity_logsUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.driver_activity_logsUpdateManyWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema).array(),z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_activity_logsCreateOrConnectWithoutDriverInputSchema),z.lazy(() => driver_activity_logsCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_activity_logsCreateManyDriverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => driver_activity_logsWhereUniqueInputSchema),z.lazy(() => driver_activity_logsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => driver_activity_logsWhereUniqueInputSchema),z.lazy(() => driver_activity_logsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => driver_activity_logsWhereUniqueInputSchema),z.lazy(() => driver_activity_logsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => driver_activity_logsWhereUniqueInputSchema),z.lazy(() => driver_activity_logsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => driver_activity_logsScalarWhereInputSchema),z.lazy(() => driver_activity_logsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default driver_activity_logsUpdateManyWithoutDriverNestedInputSchema;
