import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const translationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.translationsCountOrderByAggregateInput> = z.object({
  translations_id: z.lazy(() => SortOrderSchema).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  translation: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default translationsCountOrderByAggregateInputSchema;
