import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUpdateManyWithoutReviewableNestedInputSchema';
import { businessUpdateManyWithoutReviewableNestedInputSchema } from './businessUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUpdateWithoutUserInputSchema: z.ZodType<Prisma.reviewableUpdateWithoutUserInput> = z
	.object({
		reviewable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		reviews: z.lazy(() => reviewsUpdateManyWithoutReviewableNestedInputSchema).optional(),
		business: z.lazy(() => businessUpdateManyWithoutReviewableNestedInputSchema).optional(),
	})
	.strict();

export default reviewableUpdateWithoutUserInputSchema;
