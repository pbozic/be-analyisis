import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyUncheckedCreateNestedManyWithoutWordInputSchema } from './word_buyUncheckedCreateNestedManyWithoutWordInputSchema';
import { word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema } from './word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema';

export const wordsUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.wordsUncheckedCreateWithoutCategoryInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  translatable_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  subscriptions: z.lazy(() => word_buyUncheckedCreateNestedManyWithoutWordInputSchema).optional(),
  bundles: z.lazy(() => word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema).optional()
}).strict();

export default wordsUncheckedCreateWithoutCategoryInputSchema;
