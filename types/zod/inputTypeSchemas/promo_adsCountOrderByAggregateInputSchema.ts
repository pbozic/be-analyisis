import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_adsCountOrderByAggregateInputSchema: z.ZodType<Prisma.promo_adsCountOrderByAggregateInput> = z.object({
  promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  service_type: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  active_at: z.lazy(() => SortOrderSchema).optional(),
  active_until: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_adsCountOrderByAggregateInputSchema;
