import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutDriverInputSchema } from './driver_history_locationsCreateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDriverInputSchema } from './driver_history_locationsUncheckedCreateWithoutDriverInputSchema';
import { driver_history_locationsCreateOrConnectWithoutDriverInputSchema } from './driver_history_locationsCreateOrConnectWithoutDriverInputSchema';
import { driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema } from './driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema';
import { driver_history_locationsCreateManyDriverInputEnvelopeSchema } from './driver_history_locationsCreateManyDriverInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema } from './driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema';
import { driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema } from './driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema';
import { driver_history_locationsScalarWhereInputSchema } from './driver_history_locationsScalarWhereInputSchema';

export const driver_history_locationsUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateManyWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema),z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema).array(),z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_history_locationsCreateOrConnectWithoutDriverInputSchema),z.lazy(() => driver_history_locationsCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_history_locationsCreateManyDriverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => driver_history_locationsWhereUniqueInputSchema),z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => driver_history_locationsWhereUniqueInputSchema),z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => driver_history_locationsWhereUniqueInputSchema),z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => driver_history_locationsWhereUniqueInputSchema),z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => driver_history_locationsScalarWhereInputSchema),z.lazy(() => driver_history_locationsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default driver_history_locationsUpdateManyWithoutDriverNestedInputSchema;
