import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithoutOrderInputSchema } from './driver_history_locationsUpdateWithoutOrderInputSchema';
import { driver_history_locationsUncheckedUpdateWithoutOrderInputSchema } from './driver_history_locationsUncheckedUpdateWithoutOrderInputSchema';

export const driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateWithWhereUniqueWithoutOrderInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => driver_history_locationsUpdateWithoutOrderInputSchema),z.lazy(() => driver_history_locationsUncheckedUpdateWithoutOrderInputSchema) ]),
}).strict();

export default driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema;
