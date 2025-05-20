import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableCreateWithoutReviewsInputSchema } from './reviewableCreateWithoutReviewsInputSchema';
import { reviewableUncheckedCreateWithoutReviewsInputSchema } from './reviewableUncheckedCreateWithoutReviewsInputSchema';

export const reviewableCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => reviewableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => reviewableCreateWithoutReviewsInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export default reviewableCreateOrConnectWithoutReviewsInputSchema;
