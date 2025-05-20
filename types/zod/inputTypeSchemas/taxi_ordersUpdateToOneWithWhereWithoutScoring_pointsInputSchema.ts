import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUpdateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default taxi_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema;
