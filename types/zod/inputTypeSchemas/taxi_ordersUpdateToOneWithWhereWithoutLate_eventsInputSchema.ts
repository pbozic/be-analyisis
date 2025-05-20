import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUpdateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutLate_eventsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema) ]),
}).strict();

export default taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema;
