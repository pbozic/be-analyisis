import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyUncheckedCreateNestedManyWithoutWordInputSchema } from './word_buyUncheckedCreateNestedManyWithoutWordInputSchema';
import { word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema } from './word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema';

export const wordsUncheckedCreateInputSchema: z.ZodType<Prisma.wordsUncheckedCreateInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  categories_id: z.string().optional().nullable(),
  translatable_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  subscriptions: z.lazy(() => word_buyUncheckedCreateNestedManyWithoutWordInputSchema).optional(),
  bundles: z.lazy(() => word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema).optional()
}).strict();

export default wordsUncheckedCreateInputSchema;
