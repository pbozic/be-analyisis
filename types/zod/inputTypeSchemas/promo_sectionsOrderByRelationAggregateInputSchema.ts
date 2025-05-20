import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_sectionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.promo_sectionsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_sectionsOrderByRelationAggregateInputSchema;
