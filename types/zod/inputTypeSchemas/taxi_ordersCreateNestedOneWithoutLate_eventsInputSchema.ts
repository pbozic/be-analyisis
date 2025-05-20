import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutLate_eventsInputSchema } from './taxi_ordersCreateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema } from './taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutLate_eventsInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutLate_eventsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
  connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional()
}).strict();

export default taxi_ordersCreateNestedOneWithoutLate_eventsInputSchema;
