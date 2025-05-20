import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithoutReviewableInputSchema } from './reviewsUpdateWithoutReviewableInputSchema';
import { reviewsUncheckedUpdateWithoutReviewableInputSchema } from './reviewsUncheckedUpdateWithoutReviewableInputSchema';

export const reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsUpdateWithWhereUniqueWithoutReviewableInput> = z.object({
  where: z.lazy(() => reviewsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => reviewsUpdateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedUpdateWithoutReviewableInputSchema) ]),
}).strict();

export default reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema;
