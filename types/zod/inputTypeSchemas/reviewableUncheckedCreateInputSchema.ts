import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema } from './reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema';
import { usersUncheckedCreateNestedManyWithoutReviewableInputSchema } from './usersUncheckedCreateNestedManyWithoutReviewableInputSchema';
import { businessUncheckedCreateNestedManyWithoutReviewableInputSchema } from './businessUncheckedCreateNestedManyWithoutReviewableInputSchema';

export const reviewableUncheckedCreateInputSchema: z.ZodType<Prisma.reviewableUncheckedCreateInput> = z
	.object({
		reviewable_id: z.string().uuid().optional(),
		reviews: z.lazy(() => reviewsUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
		user: z.lazy(() => usersUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
		business: z.lazy(() => businessUncheckedCreateNestedManyWithoutReviewableInputSchema).optional(),
	})
	.strict();

export default reviewableUncheckedCreateInputSchema;
