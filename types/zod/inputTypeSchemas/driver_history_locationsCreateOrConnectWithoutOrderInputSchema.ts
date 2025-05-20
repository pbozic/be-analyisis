import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsCreateWithoutOrderInputSchema } from './driver_history_locationsCreateWithoutOrderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './driver_history_locationsUncheckedCreateWithoutOrderInputSchema';

export const driver_history_locationsCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.driver_history_locationsCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driver_history_locationsCreateWithoutOrderInputSchema),z.lazy(() => driver_history_locationsUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export default driver_history_locationsCreateOrConnectWithoutOrderInputSchema;
