import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateNestedManyWithoutBundlesInputSchema } from './wordsCreateNestedManyWithoutBundlesInputSchema';

export const word_bundlesCreateInputSchema: z.ZodType<Prisma.word_bundlesCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  words: z.lazy(() => wordsCreateNestedManyWithoutBundlesInputSchema).optional()
}).strict();

export default word_bundlesCreateInputSchema;
