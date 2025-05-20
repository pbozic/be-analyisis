import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema';
import { usersUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './usersUncheckedUpdateManyWithoutReviewableNestedInputSchema';
import { businessUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './businessUncheckedUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUncheckedUpdateInputSchema: z.ZodType<Prisma.reviewableUncheckedUpdateInput> = z
	.object({
		reviewable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		reviews: z.lazy(() => reviewsUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
		user: z.lazy(() => usersUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
		business: z.lazy(() => businessUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
	})
	.strict();

export default reviewableUncheckedUpdateInputSchema;
