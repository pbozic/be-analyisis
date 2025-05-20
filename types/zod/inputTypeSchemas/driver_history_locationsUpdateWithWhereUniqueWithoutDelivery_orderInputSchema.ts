import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithoutDelivery_orderInputSchema } from './driver_history_locationsUpdateWithoutDelivery_orderInputSchema';
import { driver_history_locationsUncheckedUpdateWithoutDelivery_orderInputSchema } from './driver_history_locationsUncheckedUpdateWithoutDelivery_orderInputSchema';

export const driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => driver_history_locationsUpdateWithoutDelivery_orderInputSchema),z.lazy(() => driver_history_locationsUncheckedUpdateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema;
