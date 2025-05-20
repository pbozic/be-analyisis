import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsWhereUniqueInputSchema } from './driver_activity_logsWhereUniqueInputSchema';
import { driver_activity_logsUpdateWithoutDriverInputSchema } from './driver_activity_logsUpdateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedUpdateWithoutDriverInputSchema } from './driver_activity_logsUncheckedUpdateWithoutDriverInputSchema';

export const driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.driver_activity_logsUpdateWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => driver_activity_logsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => driver_activity_logsUpdateWithoutDriverInputSchema),z.lazy(() => driver_activity_logsUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export default driver_activity_logsUpdateWithWhereUniqueWithoutDriverInputSchema;
