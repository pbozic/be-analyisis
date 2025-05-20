import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_bannersCountOrderByAggregateInputSchema } from './promo_bannersCountOrderByAggregateInputSchema';
import { promo_bannersMaxOrderByAggregateInputSchema } from './promo_bannersMaxOrderByAggregateInputSchema';
import { promo_bannersMinOrderByAggregateInputSchema } from './promo_bannersMinOrderByAggregateInputSchema';

export const promo_bannersOrderByWithAggregationInputSchema: z.ZodType<Prisma.promo_bannersOrderByWithAggregationInput> = z.object({
  promo_banners_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  size: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  promo_section_buy_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  file_id: z.lazy(() => SortOrderSchema).optional(),
  promo_ads_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => promo_bannersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => promo_bannersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => promo_bannersMinOrderByAggregateInputSchema).optional()
}).strict();

export default promo_bannersOrderByWithAggregationInputSchema;
