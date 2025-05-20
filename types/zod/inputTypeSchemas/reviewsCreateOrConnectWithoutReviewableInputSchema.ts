import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsCreateWithoutReviewableInputSchema } from './reviewsCreateWithoutReviewableInputSchema';
import { reviewsUncheckedCreateWithoutReviewableInputSchema } from './reviewsUncheckedCreateWithoutReviewableInputSchema';

export const reviewsCreateOrConnectWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsCreateOrConnectWithoutReviewableInput> = z.object({
  where: z.lazy(() => reviewsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => reviewsCreateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema) ]),
}).strict();

export default reviewsCreateOrConnectWithoutReviewableInputSchema;
