import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyReviewableInputSchema } from './businessCreateManyReviewableInputSchema';

export const businessCreateManyReviewableInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyReviewableInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => businessCreateManyReviewableInputSchema),
				z.lazy(() => businessCreateManyReviewableInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default businessCreateManyReviewableInputEnvelopeSchema;
