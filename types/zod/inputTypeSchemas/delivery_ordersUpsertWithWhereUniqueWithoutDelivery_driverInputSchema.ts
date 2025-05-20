import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutDelivery_driverInputSchema } from './delivery_ordersUpdateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema';
import { delivery_ordersCreateWithoutDelivery_driverInputSchema } from './delivery_ordersCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema';

export const delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema) ]),
}).strict();

export default delivery_ordersUpsertWithWhereUniqueWithoutDelivery_driverInputSchema;
