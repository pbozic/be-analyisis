import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithoutDelivery_driverInputSchema } from './delivery_order_sentUpdateWithoutDelivery_driverInputSchema';
import { delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema';

export const delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => delivery_order_sentUpdateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema) ]),
}).strict();

export default delivery_order_sentUpdateWithWhereUniqueWithoutDelivery_driverInputSchema;
