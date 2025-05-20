import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema';
import { usersUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './usersUncheckedUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableUncheckedUpdateWithoutBusinessInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reviews: z.lazy(() => reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
  user: z.lazy(() => usersUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional()
}).strict();

export default reviewableUncheckedUpdateWithoutBusinessInputSchema;
