import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const wordsCreateManyTranslatableInputSchema: z.ZodType<Prisma.wordsCreateManyTranslatableInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  categories_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default wordsCreateManyTranslatableInputSchema;
