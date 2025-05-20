import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';
import { scoring_pointsUpdateManyMutationInputSchema } from './scoring_pointsUpdateManyMutationInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutBusinessesInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutBusinessesInputSchema';

export const scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.scoring_pointsUpdateManyWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => scoring_pointsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateManyMutationInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateManyWithoutBusinessesInputSchema) ]),
}).strict();

export default scoring_pointsUpdateManyWithWhereWithoutBusinessesInputSchema;
