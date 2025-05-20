import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsCreateWithoutDelivery_ordersInputSchema } from './late_eventsCreateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema';

export const late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsCreateOrConnectWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default late_eventsCreateOrConnectWithoutDelivery_ordersInputSchema;
