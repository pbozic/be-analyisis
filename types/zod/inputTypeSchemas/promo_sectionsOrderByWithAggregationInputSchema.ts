import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_sectionsCountOrderByAggregateInputSchema } from './promo_sectionsCountOrderByAggregateInputSchema';
import { promo_sectionsAvgOrderByAggregateInputSchema } from './promo_sectionsAvgOrderByAggregateInputSchema';
import { promo_sectionsMaxOrderByAggregateInputSchema } from './promo_sectionsMaxOrderByAggregateInputSchema';
import { promo_sectionsMinOrderByAggregateInputSchema } from './promo_sectionsMinOrderByAggregateInputSchema';
import { promo_sectionsSumOrderByAggregateInputSchema } from './promo_sectionsSumOrderByAggregateInputSchema';

export const promo_sectionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.promo_sectionsOrderByWithAggregationInput> = z.object({
  promo_sections_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  prices: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  limits: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stripe_product_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  canPurchase: z.lazy(() => SortOrderSchema).optional(),
  t1price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  t2price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  t3price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  service_type: z.lazy(() => SortOrderSchema).optional(),
  promo_duration_days: z.lazy(() => SortOrderSchema).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  display_cards_per_page: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => promo_sectionsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => promo_sectionsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => promo_sectionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => promo_sectionsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => promo_sectionsSumOrderByAggregateInputSchema).optional()
}).strict();

export default promo_sectionsOrderByWithAggregationInputSchema;
