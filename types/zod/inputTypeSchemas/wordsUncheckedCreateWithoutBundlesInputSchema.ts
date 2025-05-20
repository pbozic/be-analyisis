import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyUncheckedCreateNestedManyWithoutWordInputSchema } from './word_buyUncheckedCreateNestedManyWithoutWordInputSchema';

export const wordsUncheckedCreateWithoutBundlesInputSchema: z.ZodType<Prisma.wordsUncheckedCreateWithoutBundlesInput> = z.object({
  word_id: z.string().uuid().optional(),
  word: z.string(),
  popularity: z.number().int().optional(),
  categories_id: z.string().optional().nullable(),
  translatable_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  subscriptions: z.lazy(() => word_buyUncheckedCreateNestedManyWithoutWordInputSchema).optional()
}).strict();

export default wordsUncheckedCreateWithoutBundlesInputSchema;
