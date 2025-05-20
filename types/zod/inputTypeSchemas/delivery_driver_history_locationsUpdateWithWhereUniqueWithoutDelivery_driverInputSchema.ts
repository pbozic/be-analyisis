import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsUpdateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUpdateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUncheckedUpdateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUncheckedUpdateWithoutDelivery_driverInputSchema';

export const delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => delivery_driver_history_locationsUpdateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_driver_history_locationsUncheckedUpdateWithoutDelivery_driverInputSchema) ]),
}).strict();

export default delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema;
