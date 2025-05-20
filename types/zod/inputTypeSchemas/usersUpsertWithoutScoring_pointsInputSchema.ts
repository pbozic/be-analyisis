import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutScoring_pointsInputSchema } from './usersUpdateWithoutScoring_pointsInputSchema';
import { usersUncheckedUpdateWithoutScoring_pointsInputSchema } from './usersUncheckedUpdateWithoutScoring_pointsInputSchema';
import { usersCreateWithoutScoring_pointsInputSchema } from './usersCreateWithoutScoring_pointsInputSchema';
import { usersUncheckedCreateWithoutScoring_pointsInputSchema } from './usersUncheckedCreateWithoutScoring_pointsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutScoring_pointsInputSchema: z.ZodType<Prisma.usersUpsertWithoutScoring_pointsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedCreateWithoutScoring_pointsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export default usersUpsertWithoutScoring_pointsInputSchema;
