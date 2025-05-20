import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema;
