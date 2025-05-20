import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { word_bundlesCountOrderByAggregateInputSchema } from './word_bundlesCountOrderByAggregateInputSchema';
import { word_bundlesMaxOrderByAggregateInputSchema } from './word_bundlesMaxOrderByAggregateInputSchema';
import { word_bundlesMinOrderByAggregateInputSchema } from './word_bundlesMinOrderByAggregateInputSchema';

export const word_bundlesOrderByWithAggregationInputSchema: z.ZodType<Prisma.word_bundlesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => word_bundlesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => word_bundlesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => word_bundlesMinOrderByAggregateInputSchema).optional()
}).strict();

export default word_bundlesOrderByWithAggregationInputSchema;
