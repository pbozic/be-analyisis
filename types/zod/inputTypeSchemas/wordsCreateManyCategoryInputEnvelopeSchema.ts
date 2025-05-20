import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateManyCategoryInputSchema } from './wordsCreateManyCategoryInputSchema';

export const wordsCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.wordsCreateManyCategoryInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => wordsCreateManyCategoryInputSchema),
			z.lazy(() => wordsCreateManyCategoryInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default wordsCreateManyCategoryInputEnvelopeSchema;
