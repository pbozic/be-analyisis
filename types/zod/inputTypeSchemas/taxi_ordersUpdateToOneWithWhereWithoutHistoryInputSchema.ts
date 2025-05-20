import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutHistoryInputSchema } from './taxi_ordersUpdateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedUpdateWithoutHistoryInputSchema } from './taxi_ordersUncheckedUpdateWithoutHistoryInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutHistoryInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutHistoryInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutHistoryInputSchema) ]),
}).strict();

export default taxi_ordersUpdateToOneWithWhereWithoutHistoryInputSchema;
