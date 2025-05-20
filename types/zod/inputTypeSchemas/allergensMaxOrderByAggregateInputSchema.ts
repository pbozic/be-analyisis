import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allergensMaxOrderByAggregateInputSchema: z.ZodType<Prisma.allergensMaxOrderByAggregateInput> = z.object({
  allergen_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default allergensMaxOrderByAggregateInputSchema;
