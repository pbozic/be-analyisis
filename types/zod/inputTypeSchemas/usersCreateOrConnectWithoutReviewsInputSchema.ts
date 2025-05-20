import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutReviewsInputSchema } from './usersCreateWithoutReviewsInputSchema';
import { usersUncheckedCreateWithoutReviewsInputSchema } from './usersUncheckedCreateWithoutReviewsInputSchema';

export const usersCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutReviewsInputSchema),z.lazy(() => usersUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutReviewsInputSchema;
