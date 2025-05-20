import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateNestedManyWithoutReviewableInputSchema } from './reviewsCreateNestedManyWithoutReviewableInputSchema';
import { usersCreateNestedManyWithoutReviewableInputSchema } from './usersCreateNestedManyWithoutReviewableInputSchema';

export const reviewableCreateWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableCreateWithoutBusinessInput> = z.object({
  reviewable_id: z.string().uuid().optional(),
  reviews: z.lazy(() => reviewsCreateNestedManyWithoutReviewableInputSchema).optional(),
  user: z.lazy(() => usersCreateNestedManyWithoutReviewableInputSchema).optional()
}).strict();

export default reviewableCreateWithoutBusinessInputSchema;
