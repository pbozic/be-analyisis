import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateManyReviewableInputSchema } from './usersCreateManyReviewableInputSchema';

export const usersCreateManyReviewableInputEnvelopeSchema: z.ZodType<Prisma.usersCreateManyReviewableInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => usersCreateManyReviewableInputSchema),
			z.lazy(() => usersCreateManyReviewableInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default usersCreateManyReviewableInputEnvelopeSchema;
