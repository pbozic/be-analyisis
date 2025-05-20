import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutLate_eventsInputSchema } from './taxi_ordersCreateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema';

export const taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutLate_eventsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutLate_eventsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema;
