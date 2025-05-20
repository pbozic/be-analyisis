import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_sections_buyCountOrderByAggregateInputSchema } from './promo_sections_buyCountOrderByAggregateInputSchema';
import { promo_sections_buyAvgOrderByAggregateInputSchema } from './promo_sections_buyAvgOrderByAggregateInputSchema';
import { promo_sections_buyMaxOrderByAggregateInputSchema } from './promo_sections_buyMaxOrderByAggregateInputSchema';
import { promo_sections_buyMinOrderByAggregateInputSchema } from './promo_sections_buyMinOrderByAggregateInputSchema';
import { promo_sections_buySumOrderByAggregateInputSchema } from './promo_sections_buySumOrderByAggregateInputSchema';

export const promo_sections_buyOrderByWithAggregationInputSchema: z.ZodType<Prisma.promo_sections_buyOrderByWithAggregationInput> = z.object({
  promo_sections_buy_id: z.lazy(() => SortOrderSchema).optional(),
  promo_sections_id: z.lazy(() => SortOrderSchema).optional(),
  stripe_subscription_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => promo_sections_buyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => promo_sections_buyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => promo_sections_buyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => promo_sections_buyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => promo_sections_buySumOrderByAggregateInputSchema).optional()
}).strict();

export default promo_sections_buyOrderByWithAggregationInputSchema;
