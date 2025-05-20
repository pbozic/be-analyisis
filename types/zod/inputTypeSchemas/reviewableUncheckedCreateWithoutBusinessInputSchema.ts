import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema } from './reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema';
import { usersUncheckedCreateNestedManyWithoutReviewableInputSchema } from './usersUncheckedCreateNestedManyWithoutReviewableInputSchema';

export const reviewableUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableUncheckedCreateWithoutBusinessInput> =
	z
		.object({
			reviewable_id: z.string().uuid().optional(),
			reviews: z.lazy(() => reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
			user: z.lazy(() => usersUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
		})
		.strict();

export default reviewableUncheckedCreateWithoutBusinessInputSchema;
