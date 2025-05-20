import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateManyReviewableInputSchema } from './reviewsCreateManyReviewableInputSchema';

export const reviewsCreateManyReviewableInputEnvelopeSchema: z.ZodType<Prisma.reviewsCreateManyReviewableInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => reviewsCreateManyReviewableInputSchema),
				z.lazy(() => reviewsCreateManyReviewableInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default reviewsCreateManyReviewableInputEnvelopeSchema;
