import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_sections_buyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.promo_sections_buyAvgOrderByAggregateInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_sections_buyAvgOrderByAggregateInputSchema;
