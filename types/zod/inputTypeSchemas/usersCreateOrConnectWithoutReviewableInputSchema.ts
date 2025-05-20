import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutReviewableInputSchema } from './usersCreateWithoutReviewableInputSchema';
import { usersUncheckedCreateWithoutReviewableInputSchema } from './usersUncheckedCreateWithoutReviewableInputSchema';

export const usersCreateOrConnectWithoutReviewableInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutReviewableInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutReviewableInputSchema),z.lazy(() => usersUncheckedCreateWithoutReviewableInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutReviewableInputSchema;
