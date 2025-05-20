import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusinessInputSchema } from './taxi_ordersUpdateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusinessInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusinessInputSchema';
import { taxi_ordersCreateWithoutBusinessInputSchema } from './taxi_ordersCreateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusinessInputSchema } from './taxi_ordersUncheckedCreateWithoutBusinessInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema;
