import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutDriverInputSchema } from './taxi_ordersUpdateWithoutDriverInputSchema';
import { taxi_ordersUncheckedUpdateWithoutDriverInputSchema } from './taxi_ordersUncheckedUpdateWithoutDriverInputSchema';
import { taxi_ordersCreateWithoutDriverInputSchema } from './taxi_ordersCreateWithoutDriverInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriverInputSchema } from './taxi_ordersUncheckedCreateWithoutDriverInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutDriverInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema;
