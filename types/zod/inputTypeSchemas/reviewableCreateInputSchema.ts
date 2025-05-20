import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateNestedManyWithoutReviewableInputSchema } from './reviewsCreateNestedManyWithoutReviewableInputSchema';
import { usersCreateNestedManyWithoutReviewableInputSchema } from './usersCreateNestedManyWithoutReviewableInputSchema';
import { businessCreateNestedManyWithoutReviewableInputSchema } from './businessCreateNestedManyWithoutReviewableInputSchema';

export const reviewableCreateInputSchema: z.ZodType<Prisma.reviewableCreateInput> = z.object({
  reviewable_id: z.string().uuid().optional(),
  reviews: z.lazy(() => reviewsCreateNestedManyWithoutReviewableInputSchema).optional(),
  user: z.lazy(() => usersCreateNestedManyWithoutReviewableInputSchema).optional(),
  business: z.lazy(() => businessCreateNestedManyWithoutReviewableInputSchema).optional()
}).strict();

export default reviewableCreateInputSchema;
