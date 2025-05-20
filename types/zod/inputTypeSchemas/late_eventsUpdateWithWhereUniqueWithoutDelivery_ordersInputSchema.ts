import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutDelivery_ordersInputSchema } from './late_eventsUpdateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => late_eventsUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default late_eventsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema;
