import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { user_favorite_businessesCountOrderByAggregateInputSchema } from './user_favorite_businessesCountOrderByAggregateInputSchema';
import { user_favorite_businessesMaxOrderByAggregateInputSchema } from './user_favorite_businessesMaxOrderByAggregateInputSchema';
import { user_favorite_businessesMinOrderByAggregateInputSchema } from './user_favorite_businessesMinOrderByAggregateInputSchema';

export const user_favorite_businessesOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_favorite_businessesOrderByWithAggregationInput> = z.object({
  user_favorite_businesses_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  business_type: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_favorite_businessesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_favorite_businessesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_favorite_businessesMinOrderByAggregateInputSchema).optional()
}).strict();

export default user_favorite_businessesOrderByWithAggregationInputSchema;
