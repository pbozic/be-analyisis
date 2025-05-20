import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutDelivery_driver_history_locationsInput> = z.object({
  update: z.union([ z.lazy(() => delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema) ]),
  where: z.lazy(() => delivery_driversWhereInputSchema).optional()
}).strict();

export default delivery_driversUpsertWithoutDelivery_driver_history_locationsInputSchema;
