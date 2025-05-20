import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wordsSumOrderByAggregateInputSchema: z.ZodType<Prisma.wordsSumOrderByAggregateInput> = z.object({
  popularity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wordsSumOrderByAggregateInputSchema;
