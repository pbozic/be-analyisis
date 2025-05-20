import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutDelivery_ordersInputSchema } from './late_eventsUpdateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { late_eventsCreateWithoutDelivery_ordersInputSchema } from './late_eventsCreateWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema';

export const late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => late_eventsUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => late_eventsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default late_eventsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema;
