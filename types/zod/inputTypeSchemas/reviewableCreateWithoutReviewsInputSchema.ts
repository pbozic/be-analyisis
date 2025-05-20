import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedManyWithoutReviewableInputSchema } from './usersCreateNestedManyWithoutReviewableInputSchema';
import { businessCreateNestedManyWithoutReviewableInputSchema } from './businessCreateNestedManyWithoutReviewableInputSchema';

export const reviewableCreateWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableCreateWithoutReviewsInput> = z.object({
  reviewable_id: z.string().uuid().optional(),
  user: z.lazy(() => usersCreateNestedManyWithoutReviewableInputSchema).optional(),
  business: z.lazy(() => businessCreateNestedManyWithoutReviewableInputSchema).optional()
}).strict();

export default reviewableCreateWithoutReviewsInputSchema;
