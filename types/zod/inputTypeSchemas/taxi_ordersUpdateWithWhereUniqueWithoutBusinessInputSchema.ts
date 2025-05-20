import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusinessInputSchema } from './taxi_ordersUpdateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusinessInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusinessInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema;
