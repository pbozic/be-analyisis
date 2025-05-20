import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUpdateManyWithoutReviewableNestedInputSchema';
import { usersUpdateManyWithoutReviewableNestedInputSchema } from './usersUpdateManyWithoutReviewableNestedInputSchema';
import { businessUpdateManyWithoutReviewableNestedInputSchema } from './businessUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUpdateInputSchema: z.ZodType<Prisma.reviewableUpdateInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reviews: z.lazy(() => reviewsUpdateManyWithoutReviewableNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateManyWithoutReviewableNestedInputSchema).optional(),
  business: z.lazy(() => businessUpdateManyWithoutReviewableNestedInputSchema).optional()
}).strict();

export default reviewableUpdateInputSchema;
