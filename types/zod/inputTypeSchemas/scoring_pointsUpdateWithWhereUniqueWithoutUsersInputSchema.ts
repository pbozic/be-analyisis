import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutUsersInputSchema } from './scoring_pointsUpdateWithoutUsersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutUsersInputSchema } from './scoring_pointsUncheckedUpdateWithoutUsersInputSchema';

export const scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => scoring_pointsUpdateWithoutUsersInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default scoring_pointsUpdateWithWhereUniqueWithoutUsersInputSchema;
