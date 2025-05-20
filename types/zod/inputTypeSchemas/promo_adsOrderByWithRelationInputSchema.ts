import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_bannersOrderByRelationAggregateInputSchema } from './promo_bannersOrderByRelationAggregateInputSchema';
import { promo_ads_categoryOrderByRelationAggregateInputSchema } from './promo_ads_categoryOrderByRelationAggregateInputSchema';

export const promo_adsOrderByWithRelationInputSchema: z.ZodType<Prisma.promo_adsOrderByWithRelationInput> = z.object({
  promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  service_type: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  code: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  active_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active_until: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  banner: z.lazy(() => promo_bannersOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => promo_ads_categoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export default promo_adsOrderByWithRelationInputSchema;
