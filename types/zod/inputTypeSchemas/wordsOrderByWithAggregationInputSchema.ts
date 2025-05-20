import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { wordsCountOrderByAggregateInputSchema } from './wordsCountOrderByAggregateInputSchema';
import { wordsAvgOrderByAggregateInputSchema } from './wordsAvgOrderByAggregateInputSchema';
import { wordsMaxOrderByAggregateInputSchema } from './wordsMaxOrderByAggregateInputSchema';
import { wordsMinOrderByAggregateInputSchema } from './wordsMinOrderByAggregateInputSchema';
import { wordsSumOrderByAggregateInputSchema } from './wordsSumOrderByAggregateInputSchema';

export const wordsOrderByWithAggregationInputSchema: z.ZodType<Prisma.wordsOrderByWithAggregationInput> = z.object({
  word_id: z.lazy(() => SortOrderSchema).optional(),
  word: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  categories_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => wordsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => wordsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => wordsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => wordsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => wordsSumOrderByAggregateInputSchema).optional()
}).strict();

export default wordsOrderByWithAggregationInputSchema;
