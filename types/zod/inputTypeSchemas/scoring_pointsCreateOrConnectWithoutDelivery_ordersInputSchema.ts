import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsCreateWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema';

export const scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.scoring_pointsCreateOrConnectWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutDelivery_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default scoring_pointsCreateOrConnectWithoutDelivery_ordersInputSchema;
