import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const wordsCreateManyCategoryInputSchema: z.ZodType<Prisma.wordsCreateManyCategoryInput> = z
	.object({
		word_id: z.string().uuid().optional(),
		word: z.string(),
		popularity: z.number().int().optional(),
		translatable_id: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default wordsCreateManyCategoryInputSchema;
