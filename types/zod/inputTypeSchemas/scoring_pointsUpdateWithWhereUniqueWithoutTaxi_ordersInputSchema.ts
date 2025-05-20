import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutTaxi_ordersInputSchema } from './scoring_pointsUpdateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateWithoutTaxi_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema;
