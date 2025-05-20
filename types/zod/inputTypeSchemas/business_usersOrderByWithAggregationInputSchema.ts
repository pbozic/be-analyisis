import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { business_usersCountOrderByAggregateInputSchema } from './business_usersCountOrderByAggregateInputSchema';
import { business_usersMaxOrderByAggregateInputSchema } from './business_usersMaxOrderByAggregateInputSchema';
import { business_usersMinOrderByAggregateInputSchema } from './business_usersMinOrderByAggregateInputSchema';

export const business_usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.business_usersOrderByWithAggregationInput> = z.object({
  business_users_id: z.lazy(() => SortOrderSchema).optional(),
  online: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  company_role: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  operating_address_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => business_usersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => business_usersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => business_usersMinOrderByAggregateInputSchema).optional()
}).strict();

export default business_usersOrderByWithAggregationInputSchema;
