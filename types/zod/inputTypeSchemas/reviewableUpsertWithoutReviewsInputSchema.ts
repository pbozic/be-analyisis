import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableUpdateWithoutReviewsInputSchema } from './reviewableUpdateWithoutReviewsInputSchema';
import { reviewableUncheckedUpdateWithoutReviewsInputSchema } from './reviewableUncheckedUpdateWithoutReviewsInputSchema';
import { reviewableCreateWithoutReviewsInputSchema } from './reviewableCreateWithoutReviewsInputSchema';
import { reviewableUncheckedCreateWithoutReviewsInputSchema } from './reviewableUncheckedCreateWithoutReviewsInputSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';

export const reviewableUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => reviewableUpdateWithoutReviewsInputSchema),z.lazy(() => reviewableUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => reviewableCreateWithoutReviewsInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutReviewsInputSchema) ]),
  where: z.lazy(() => reviewableWhereInputSchema).optional()
}).strict();

export default reviewableUpsertWithoutReviewsInputSchema;
