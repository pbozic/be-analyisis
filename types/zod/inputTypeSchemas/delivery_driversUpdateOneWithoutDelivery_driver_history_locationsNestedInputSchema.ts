import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUpsertWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUpsertWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema: z.ZodType<Prisma.delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema).optional(),
  upsert: z.lazy(() => delivery_driversUpsertWithoutDelivery_driver_history_locationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema) ]).optional(),
}).strict();

export default delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema;
