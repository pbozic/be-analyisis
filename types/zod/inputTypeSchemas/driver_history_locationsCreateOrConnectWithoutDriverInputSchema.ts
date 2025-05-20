import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsCreateWithoutDriverInputSchema } from './driver_history_locationsCreateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDriverInputSchema } from './driver_history_locationsUncheckedCreateWithoutDriverInputSchema';

export const driver_history_locationsCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsCreateOrConnectWithoutDriverInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default driver_history_locationsCreateOrConnectWithoutDriverInputSchema;
