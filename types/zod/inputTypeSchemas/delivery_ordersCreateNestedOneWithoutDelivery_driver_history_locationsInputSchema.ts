import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema;
