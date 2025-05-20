import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereInputSchema } from './wordsWhereInputSchema';

export const WordsListRelationFilterSchema: z.ZodType<Prisma.WordsListRelationFilter> = z
	.object({
		every: z.lazy(() => wordsWhereInputSchema).optional(),
		some: z.lazy(() => wordsWhereInputSchema).optional(),
		none: z.lazy(() => wordsWhereInputSchema).optional(),
	})
	.strict();

export default WordsListRelationFilterSchema;
