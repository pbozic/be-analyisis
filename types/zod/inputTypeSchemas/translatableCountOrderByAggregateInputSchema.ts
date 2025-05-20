import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const translatableCountOrderByAggregateInputSchema: z.ZodType<Prisma.translatableCountOrderByAggregateInput> = z.object({
  translatable_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default translatableCountOrderByAggregateInputSchema;
