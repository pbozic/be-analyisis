import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsCreateWithoutUsersInputSchema } from './scoring_pointsCreateWithoutUsersInputSchema';
import { scoring_pointsUncheckedCreateWithoutUsersInputSchema } from './scoring_pointsUncheckedCreateWithoutUsersInputSchema';

export const scoring_pointsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default scoring_pointsCreateOrConnectWithoutUsersInputSchema;
