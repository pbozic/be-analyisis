import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wordsMinOrderByAggregateInputSchema: z.ZodType<Prisma.wordsMinOrderByAggregateInput> = z.object({
  word_id: z.lazy(() => SortOrderSchema).optional(),
  word: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  categories_id: z.lazy(() => SortOrderSchema).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wordsMinOrderByAggregateInputSchema;
