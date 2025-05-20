import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema';

export const scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsCreateOrConnectWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema;
