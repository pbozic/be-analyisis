import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { allergensCountOrderByAggregateInputSchema } from './allergensCountOrderByAggregateInputSchema';
import { allergensAvgOrderByAggregateInputSchema } from './allergensAvgOrderByAggregateInputSchema';
import { allergensMaxOrderByAggregateInputSchema } from './allergensMaxOrderByAggregateInputSchema';
import { allergensMinOrderByAggregateInputSchema } from './allergensMinOrderByAggregateInputSchema';
import { allergensSumOrderByAggregateInputSchema } from './allergensSumOrderByAggregateInputSchema';

export const allergensOrderByWithAggregationInputSchema: z.ZodType<Prisma.allergensOrderByWithAggregationInput> = z.object({
  allergen_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => allergensCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => allergensAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => allergensMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => allergensMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => allergensSumOrderByAggregateInputSchema).optional()
}).strict();

export default allergensOrderByWithAggregationInputSchema;
