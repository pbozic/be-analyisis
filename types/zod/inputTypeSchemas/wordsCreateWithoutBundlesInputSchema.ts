import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateNestedOneWithoutWordsInputSchema } from './categoriesCreateNestedOneWithoutWordsInputSchema';
import { translatableCreateNestedOneWithoutWordsInputSchema } from './translatableCreateNestedOneWithoutWordsInputSchema';
import { word_buyCreateNestedManyWithoutWordInputSchema } from './word_buyCreateNestedManyWithoutWordInputSchema';

export const wordsCreateWithoutBundlesInputSchema: z.ZodType<Prisma.wordsCreateWithoutBundlesInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  category: z.lazy(() => categoriesCreateNestedOneWithoutWordsInputSchema).optional(),
  translatable: z.lazy(() => translatableCreateNestedOneWithoutWordsInputSchema),
  subscriptions: z.lazy(() => word_buyCreateNestedManyWithoutWordInputSchema).optional()
}).strict();

export default wordsCreateWithoutBundlesInputSchema;
