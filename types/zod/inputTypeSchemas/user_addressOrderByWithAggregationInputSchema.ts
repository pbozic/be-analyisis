import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { user_addressCountOrderByAggregateInputSchema } from './user_addressCountOrderByAggregateInputSchema';
import { user_addressMaxOrderByAggregateInputSchema } from './user_addressMaxOrderByAggregateInputSchema';
import { user_addressMinOrderByAggregateInputSchema } from './user_addressMinOrderByAggregateInputSchema';

export const user_addressOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_addressOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  address_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  primary: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_addressCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_addressMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_addressMinOrderByAggregateInputSchema).optional()
}).strict();

export default user_addressOrderByWithAggregationInputSchema;
