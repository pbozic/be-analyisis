import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithoutDriverInputSchema } from './driver_history_locationsUpdateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedUpdateWithoutDriverInputSchema } from './driver_history_locationsUncheckedUpdateWithoutDriverInputSchema';
import { driver_history_locationsCreateWithoutDriverInputSchema } from './driver_history_locationsCreateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDriverInputSchema } from './driver_history_locationsUncheckedCreateWithoutDriverInputSchema';

export const driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsUpsertWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => driver_history_locationsUpdateWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema),z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default driver_history_locationsUpsertWithWhereUniqueWithoutDriverInputSchema;
