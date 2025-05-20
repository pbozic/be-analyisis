import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentUpdateWithoutDriverInputSchema } from './taxi_order_sentUpdateWithoutDriverInputSchema';
import { taxi_order_sentUncheckedUpdateWithoutDriverInputSchema } from './taxi_order_sentUncheckedUpdateWithoutDriverInputSchema';

export const taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_order_sentUpdateWithoutDriverInputSchema),z.lazy(() => taxi_order_sentUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export default taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema;
