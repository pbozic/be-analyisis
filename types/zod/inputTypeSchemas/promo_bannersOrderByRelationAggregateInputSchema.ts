import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_bannersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.promo_bannersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default promo_bannersOrderByRelationAggregateInputSchema;
