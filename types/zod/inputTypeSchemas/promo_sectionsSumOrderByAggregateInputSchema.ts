import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_sectionsSumOrderByAggregateInputSchema: z.ZodType<Prisma.promo_sectionsSumOrderByAggregateInput> = z.object({
  t1price: z.lazy(() => SortOrderSchema).optional(),
  t2price: z.lazy(() => SortOrderSchema).optional(),
  t3price: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  promo_duration_days: z.lazy(() => SortOrderSchema).optional(),
  display_cards_per_page: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_sectionsSumOrderByAggregateInputSchema;
