import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const wordsCreateManyInputSchema: z.ZodType<Prisma.wordsCreateManyInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  categories_id: z.string().optional().nullable(),
  translatable_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default wordsCreateManyInputSchema;
