import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutScoring_pointsInputSchema } from './usersCreateWithoutScoring_pointsInputSchema';
import { usersUncheckedCreateWithoutScoring_pointsInputSchema } from './usersUncheckedCreateWithoutScoring_pointsInputSchema';

export const usersCreateOrConnectWithoutScoring_pointsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedCreateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutScoring_pointsInputSchema;
