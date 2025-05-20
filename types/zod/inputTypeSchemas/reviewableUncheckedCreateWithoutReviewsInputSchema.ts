import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUncheckedCreateNestedManyWithoutReviewableInputSchema } from './usersUncheckedCreateNestedManyWithoutReviewableInputSchema';
import { businessUncheckedCreateNestedManyWithoutReviewableInputSchema } from './businessUncheckedCreateNestedManyWithoutReviewableInputSchema';

export const reviewableUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.reviewableUncheckedCreateWithoutReviewsInput> =
	z
		.object({
			reviewable_id: z.string().uuid().optional(),
			user: z.lazy(() => usersUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
			business: z.lazy(() => businessUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
		})
		.strict();

export default reviewableUncheckedCreateWithoutReviewsInputSchema;
