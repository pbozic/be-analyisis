import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentUpdateWithoutOrderInputSchema } from './taxi_order_sentUpdateWithoutOrderInputSchema';
import { taxi_order_sentUncheckedUpdateWithoutOrderInputSchema } from './taxi_order_sentUncheckedUpdateWithoutOrderInputSchema';
import { taxi_order_sentCreateWithoutOrderInputSchema } from './taxi_order_sentCreateWithoutOrderInputSchema';
import { taxi_order_sentUncheckedCreateWithoutOrderInputSchema } from './taxi_order_sentUncheckedCreateWithoutOrderInputSchema';

export const taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.taxi_order_sentUpsertWithWhereUniqueWithoutOrderInput> = z.object({
  where: z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => taxi_order_sentUpdateWithoutOrderInputSchema),z.lazy(() => taxi_order_sentUncheckedUpdateWithoutOrderInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_order_sentCreateWithoutOrderInputSchema),z.lazy(() => taxi_order_sentUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export default taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema;
