import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUpdateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema;
