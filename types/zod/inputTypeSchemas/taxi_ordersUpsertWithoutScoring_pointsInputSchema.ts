import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUpdateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';
import { taxi_ordersCreateWithoutScoring_pointsInputSchema } from './taxi_ordersCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutScoring_pointsInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutScoring_pointsInput> = z.object({
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutScoring_pointsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema) ]),
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional()
}).strict();

export default taxi_ordersUpsertWithoutScoring_pointsInputSchema;
