import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutDelivery_driverInputSchema } from './delivery_ordersCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema';

export const delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema) ]),
}).strict();

export default delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema;
