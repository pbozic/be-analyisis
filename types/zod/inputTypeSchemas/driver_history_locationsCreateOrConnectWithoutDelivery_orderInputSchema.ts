import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateWithoutDelivery_orderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema';

export const driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema: z.ZodType<Prisma.driver_history_locationsCreateOrConnectWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driver_history_locationsCreateWithoutDelivery_orderInputSchema),z.lazy(() => driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema;
