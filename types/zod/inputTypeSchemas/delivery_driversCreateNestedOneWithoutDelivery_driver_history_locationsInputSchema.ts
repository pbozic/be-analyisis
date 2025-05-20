import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional()
}).strict();

export default delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema;
