import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_adsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.promo_adsAvgOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_adsAvgOrderByAggregateInputSchema;
