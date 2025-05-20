import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { flag_historyOrderByRelationAggregateInputSchema } from './flag_historyOrderByRelationAggregateInputSchema';

export const flagsOrderByWithRelationInputSchema: z.ZodType<Prisma.flagsOrderByWithRelationInput> = z.object({
  flag_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  history: z.lazy(() => flag_historyOrderByRelationAggregateInputSchema).optional()
}).strict();

export default flagsOrderByWithRelationInputSchema;
