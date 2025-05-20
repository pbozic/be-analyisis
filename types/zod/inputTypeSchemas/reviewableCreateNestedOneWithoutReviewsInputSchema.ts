import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutReviewsInputSchema } from './reviewableCreateWithoutReviewsInputSchema';
import { reviewableUncheckedCreateWithoutReviewsInputSchema } from './reviewableUncheckedCreateWithoutReviewsInputSchema';
import { reviewableCreateOrConnectWithoutReviewsInputSchema } from './reviewableCreateOrConnectWithoutReviewsInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';

export const reviewableCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => reviewableCreateWithoutReviewsInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional()
}).strict();

export default reviewableCreateNestedOneWithoutReviewsInputSchema;
