import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const translatableMinOrderByAggregateInputSchema: z.ZodType<Prisma.translatableMinOrderByAggregateInput> = z.object({
  translatable_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default translatableMinOrderByAggregateInputSchema;
