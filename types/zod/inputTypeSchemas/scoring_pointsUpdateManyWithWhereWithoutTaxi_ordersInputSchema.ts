import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';
import { scoring_pointsUpdateManyMutationInputSchema } from './scoring_pointsUpdateManyMutationInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersInputSchema';

export const scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateManyMutationInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateManyWithWhereWithoutTaxi_ordersInputSchema;
