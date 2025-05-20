import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutDelivery_ordersInputSchema } from './scoring_pointsUpdateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateWithWhereUniqueWithoutDelivery_ordersInputSchema;
