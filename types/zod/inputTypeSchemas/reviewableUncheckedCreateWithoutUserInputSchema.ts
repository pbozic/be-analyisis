import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema } from './reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema';
import { businessUncheckedCreateNestedManyWithoutReviewableInputSchema } from './businessUncheckedCreateNestedManyWithoutReviewableInputSchema';

export const reviewableUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.reviewableUncheckedCreateWithoutUserInput> =
	z
		.object({
			reviewable_id: z.string().uuid().optional(),
			reviews: z.lazy(() => reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
			business: z.lazy(() => businessUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
		})
		.strict();

export default reviewableUncheckedCreateWithoutUserInputSchema;
