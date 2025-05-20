import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { local_pricesOrderByRelationAggregateInputSchema } from './local_pricesOrderByRelationAggregateInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const local_productsOrderByWithRelationInputSchema: z.ZodType<Prisma.local_productsOrderByWithRelationInput> = z.object({
  local_product_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  prices: z.lazy(() => local_pricesOrderByRelationAggregateInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional()
}).strict();

export default local_productsOrderByWithRelationInputSchema;
