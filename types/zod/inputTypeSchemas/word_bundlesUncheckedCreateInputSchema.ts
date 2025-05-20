import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsUncheckedCreateNestedManyWithoutBundlesInputSchema } from './wordsUncheckedCreateNestedManyWithoutBundlesInputSchema';

export const word_bundlesUncheckedCreateInputSchema: z.ZodType<Prisma.word_bundlesUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  words: z.lazy(() => wordsUncheckedCreateNestedManyWithoutBundlesInputSchema).optional()
}).strict();

export default word_bundlesUncheckedCreateInputSchema;
