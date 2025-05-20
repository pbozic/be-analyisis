import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { reviewableCreateNestedOneWithoutReviewsInputSchema } from './reviewableCreateNestedOneWithoutReviewsInputSchema';

export const reviewsCreateWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsCreateWithoutAuthorInput> = z
	.object({
		review_id: z.string().uuid().optional(),
		rating: z.number().optional().nullable(),
		comment: z.string().optional().nullable(),
		feedback: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		reviewable: z.lazy(() => reviewableCreateNestedOneWithoutReviewsInputSchema),
	})
	.strict();

export default reviewsCreateWithoutAuthorInputSchema;
