import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUpdateManyWithoutReviewableNestedInputSchema';
import { usersUpdateManyWithoutReviewableNestedInputSchema } from './usersUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableUpdateWithoutBusinessInput> = z
	.object({
		reviewable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		reviews: z.lazy(() => reviewsUpdateManyWithoutReviewableNestedInputSchema).optional(),
		user: z.lazy(() => usersUpdateManyWithoutReviewableNestedInputSchema).optional(),
	})
	.strict();

export default reviewableUpdateWithoutBusinessInputSchema;
