import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_adsSumOrderByAggregateInputSchema: z.ZodType<Prisma.promo_adsSumOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_adsSumOrderByAggregateInputSchema;
