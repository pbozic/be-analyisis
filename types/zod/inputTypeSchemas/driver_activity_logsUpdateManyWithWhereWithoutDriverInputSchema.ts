import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsScalarWhereInputSchema } from './driver_activity_logsScalarWhereInputSchema';
import { driver_activity_logsUpdateManyMutationInputSchema } from './driver_activity_logsUpdateManyMutationInputSchema';
import { driver_activity_logsUncheckedUpdateManyWithoutDriverInputSchema } from './driver_activity_logsUncheckedUpdateManyWithoutDriverInputSchema';

export const driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.driver_activity_logsUpdateManyWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => driver_activity_logsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => driver_activity_logsUpdateManyMutationInputSchema),z.lazy(() => driver_activity_logsUncheckedUpdateManyWithoutDriverInputSchema) ]),
}).strict();

export default driver_activity_logsUpdateManyWithWhereWithoutDriverInputSchema;
