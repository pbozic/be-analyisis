import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema';
import { businessUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './businessUncheckedUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.reviewableUncheckedUpdateWithoutUserInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reviews: z.lazy(() => reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
  business: z.lazy(() => businessUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional()
}).strict();

export default reviewableUncheckedUpdateWithoutUserInputSchema;
