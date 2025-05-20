import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsWhereUniqueInputSchema } from './driver_activity_logsWhereUniqueInputSchema';
import { driver_activity_logsUpdateWithoutDriverInputSchema } from './driver_activity_logsUpdateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedUpdateWithoutDriverInputSchema } from './driver_activity_logsUncheckedUpdateWithoutDriverInputSchema';
import { driver_activity_logsCreateWithoutDriverInputSchema } from './driver_activity_logsCreateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedCreateWithoutDriverInputSchema } from './driver_activity_logsUncheckedCreateWithoutDriverInputSchema';

export const driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.driver_activity_logsUpsertWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => driver_activity_logsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => driver_activity_logsUpdateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default driver_activity_logsUpsertWithWhereUniqueWithoutDriverInputSchema;
