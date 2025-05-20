import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_sections_buyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.promo_sections_buyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_sections_buyOrderByRelationAggregateInputSchema;
