import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsScalarWhereInputSchema } from './scoring_pointsScalarWhereInputSchema';
import { scoring_pointsUpdateManyMutationInputSchema } from './scoring_pointsUpdateManyMutationInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutUsersInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutUsersInputSchema';

export const scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => scoring_pointsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateManyMutationInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateManyWithWhereWithoutUsersInputSchema;
