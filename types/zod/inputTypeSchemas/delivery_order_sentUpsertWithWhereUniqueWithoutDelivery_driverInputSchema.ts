import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithoutDelivery_driverInputSchema } from './delivery_order_sentUpdateWithoutDelivery_driverInputSchema';
import { delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateWithoutDelivery_driverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema';

export const delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => delivery_order_sentUpdateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUncheckedUpdateWithoutDelivery_driverInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_order_sentCreateWithoutDelivery_driverInputSchema),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema) ]),
}).strict();

export default delivery_order_sentUpsertWithWhereUniqueWithoutDelivery_driverInputSchema;
