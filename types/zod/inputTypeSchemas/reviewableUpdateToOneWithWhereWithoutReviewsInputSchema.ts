import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { reviewableUpdateWithoutReviewsInputSchema } from './reviewableUpdateWithoutReviewsInputSchema';
import { reviewableUncheckedUpdateWithoutReviewsInputSchema } from './reviewableUncheckedUpdateWithoutReviewsInputSchema';

export const reviewableUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableUpdateToOneWithWhereWithoutReviewsInput> = z.object({
  where: z.lazy(() => reviewableWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => reviewableUpdateWithoutReviewsInputSchema),z.lazy(() => reviewableUncheckedUpdateWithoutReviewsInputSchema) ]),
}).strict();

export default reviewableUpdateToOneWithWhereWithoutReviewsInputSchema;
