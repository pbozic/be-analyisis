import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithoutReviewableInputSchema } from './reviewsUpdateWithoutReviewableInputSchema';
import { reviewsUncheckedUpdateWithoutReviewableInputSchema } from './reviewsUncheckedUpdateWithoutReviewableInputSchema';
import { reviewsCreateWithoutReviewableInputSchema } from './reviewsCreateWithoutReviewableInputSchema';
import { reviewsUncheckedCreateWithoutReviewableInputSchema } from './reviewsUncheckedCreateWithoutReviewableInputSchema';

export const reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsUpsertWithWhereUniqueWithoutReviewableInput> = z.object({
  where: z.lazy(() => reviewsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => reviewsUpdateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedUpdateWithoutReviewableInputSchema) ]),
  create: z.union([ z.lazy(() => reviewsCreateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema) ]),
}).strict();

export default reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema;
