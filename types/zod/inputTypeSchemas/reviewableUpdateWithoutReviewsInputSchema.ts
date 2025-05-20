import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { usersUpdateManyWithoutReviewableNestedInputSchema } from './usersUpdateManyWithoutReviewableNestedInputSchema';
import { businessUpdateManyWithoutReviewableNestedInputSchema } from './businessUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableUpdateWithoutReviewsInput> = z.object({
  reviewable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateManyWithoutReviewableNestedInputSchema).optional(),
  business: z.lazy(() => businessUpdateManyWithoutReviewableNestedInputSchema).optional()
}).strict();

export default reviewableUpdateWithoutReviewsInputSchema;
