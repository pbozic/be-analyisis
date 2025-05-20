import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutDriverInputSchema } from './taxi_ordersUpdateWithoutDriverInputSchema';
import { taxi_ordersUncheckedUpdateWithoutDriverInputSchema } from './taxi_ordersUncheckedUpdateWithoutDriverInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutDriverInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema;
