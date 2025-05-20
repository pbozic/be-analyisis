import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';
import { scoring_pointsUpdateManyMutationInputSchema } from './scoring_pointsUpdateManyMutationInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersInputSchema';

export const scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => scoring_pointsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateManyMutationInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateManyWithWhereWithoutDelivery_ordersInputSchema;
