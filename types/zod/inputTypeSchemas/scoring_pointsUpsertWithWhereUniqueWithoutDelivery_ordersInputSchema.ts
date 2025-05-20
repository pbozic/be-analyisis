import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutDelivery_ordersInputSchema } from './scoring_pointsUpdateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { scoring_pointsCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema';

export const scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => scoring_pointsUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default scoring_pointsUpsertWithWhereUniqueWithoutDelivery_ordersInputSchema;
