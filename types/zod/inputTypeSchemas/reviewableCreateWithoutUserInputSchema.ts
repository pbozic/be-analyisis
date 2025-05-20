import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateNestedManyWithoutReviewableInputSchema } from './reviewsCreateNestedManyWithoutReviewableInputSchema';
import { businessCreateNestedManyWithoutReviewableInputSchema } from './businessCreateNestedManyWithoutReviewableInputSchema';

export const reviewableCreateWithoutUserInputSchema: z.ZodType<Prisma.reviewableCreateWithoutUserInput> = z
	.object({
		reviewable_id: z.string().uuid().optional(),
		reviews: z.lazy(() => reviewsCreateNestedManyWithoutReviewableInputSchema).optional(),
		business: z.lazy(() => businessCreateNestedManyWithoutReviewableInputSchema).optional(),
	})
	.strict();

export default reviewableCreateWithoutUserInputSchema;
