import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { tokensCountOrderByAggregateInputSchema } from './tokensCountOrderByAggregateInputSchema';
import { tokensMaxOrderByAggregateInputSchema } from './tokensMaxOrderByAggregateInputSchema';
import { tokensMinOrderByAggregateInputSchema } from './tokensMinOrderByAggregateInputSchema';

export const tokensOrderByWithAggregationInputSchema: z.ZodType<Prisma.tokensOrderByWithAggregationInput> = z.object({
  token_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => tokensCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => tokensMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => tokensMinOrderByAggregateInputSchema).optional()
}).strict();

export default tokensOrderByWithAggregationInputSchema;
