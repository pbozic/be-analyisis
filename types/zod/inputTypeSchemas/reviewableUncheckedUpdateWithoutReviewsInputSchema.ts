import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { usersUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './usersUncheckedUpdateManyWithoutReviewableNestedInputSchema';
import { businessUncheckedUpdateManyWithoutReviewableNestedInputSchema } from './businessUncheckedUpdateManyWithoutReviewableNestedInputSchema';

export const reviewableUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableUncheckedUpdateWithoutReviewsInput> =
	z
		.object({
			reviewable_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			user: z.lazy(() => usersUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
			business: z.lazy(() => businessUncheckedUpdateManyWithoutReviewableNestedInputSchema).optional(),
		})
		.strict();

export default reviewableUncheckedUpdateWithoutReviewsInputSchema;
