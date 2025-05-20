import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allergensCountOrderByAggregateInputSchema: z.ZodType<Prisma.allergensCountOrderByAggregateInput> = z.object({
  allergen_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default allergensCountOrderByAggregateInputSchema;
