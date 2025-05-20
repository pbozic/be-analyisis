import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_bannersCountOrderByAggregateInputSchema: z.ZodType<Prisma.promo_bannersCountOrderByAggregateInput> = z.object({
  promo_banners_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  promo_section_buy_id: z.lazy(() => SortOrderSchema).optional(),
  file_id: z.lazy(() => SortOrderSchema).optional(),
  promo_ads_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_bannersCountOrderByAggregateInputSchema;
