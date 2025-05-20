import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutScoring_pointsInputSchema } from './usersUpdateWithoutScoring_pointsInputSchema';
import { usersUncheckedUpdateWithoutScoring_pointsInputSchema } from './usersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const usersUpdateToOneWithWhereWithoutScoring_pointsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutScoring_pointsInputSchema;
