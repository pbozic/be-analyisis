import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsCreateWithoutDriverInputSchema } from './driver_activity_logsCreateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedCreateWithoutDriverInputSchema } from './driver_activity_logsUncheckedCreateWithoutDriverInputSchema';
import { driver_activity_logsCreateOrConnectWithoutDriverInputSchema } from './driver_activity_logsCreateOrConnectWithoutDriverInputSchema';
import { driver_activity_logsCreateManyDriverInputEnvelopeSchema } from './driver_activity_logsCreateManyDriverInputEnvelopeSchema';
import { driver_activity_logsWhereUniqueInputSchema } from './driver_activity_logsWhereUniqueInputSchema';

export const driver_activity_logsCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.driver_activity_logsCreateNestedManyWithoutDriverInput> = z.object({
  create: z.union([ z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema).array(),z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_activity_logsCreateOrConnectWithoutDriverInputSchema),z.lazy(() => driver_activity_logsCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_activity_logsCreateManyDriverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => driver_activity_logsWhereUniqueInputSchema),z.lazy(() => driver_activity_logsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default driver_activity_logsCreateNestedManyWithoutDriverInputSchema;
