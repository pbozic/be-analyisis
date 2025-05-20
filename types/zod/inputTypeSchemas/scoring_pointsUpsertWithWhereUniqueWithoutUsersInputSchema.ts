import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutUsersInputSchema } from './scoring_pointsUpdateWithoutUsersInputSchema';
import { scoring_pointsUncheckedUpdateWithoutUsersInputSchema } from './scoring_pointsUncheckedUpdateWithoutUsersInputSchema';
import { scoring_pointsCreateWithoutUsersInputSchema } from './scoring_pointsCreateWithoutUsersInputSchema';
import { scoring_pointsUncheckedCreateWithoutUsersInputSchema } from './scoring_pointsUncheckedCreateWithoutUsersInputSchema';

export const scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => scoring_pointsUpdateWithoutUsersInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default scoring_pointsUpsertWithWhereUniqueWithoutUsersInputSchema;
