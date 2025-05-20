import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereInputSchema } from './wordsWhereInputSchema';

export const WordsRelationFilterSchema: z.ZodType<Prisma.WordsRelationFilter> = z.object({
  is: z.lazy(() => wordsWhereInputSchema).optional(),
  isNot: z.lazy(() => wordsWhereInputSchema).optional()
}).strict();

export default WordsRelationFilterSchema;
