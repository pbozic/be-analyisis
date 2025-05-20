import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { categoriesCountOrderByAggregateInputSchema } from './categoriesCountOrderByAggregateInputSchema';
import { categoriesMaxOrderByAggregateInputSchema } from './categoriesMaxOrderByAggregateInputSchema';
import { categoriesMinOrderByAggregateInputSchema } from './categoriesMinOrderByAggregateInputSchema';

export const categoriesOrderByWithAggregationInputSchema: z.ZodType<Prisma.categoriesOrderByWithAggregationInput> = z.object({
  categories_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  icon_file_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category_type: z.lazy(() => SortOrderSchema).optional(),
  parent_categories_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => categoriesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => categoriesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => categoriesMinOrderByAggregateInputSchema).optional()
}).strict();

export default categoriesOrderByWithAggregationInputSchema;
