import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { flagsOrderByWithRelationInputSchema } from './flagsOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const flag_historyOrderByWithRelationInputSchema: z.ZodType<Prisma.flag_historyOrderByWithRelationInput> = z.object({
  flag_history_id: z.lazy(() => SortOrderSchema).optional(),
  flag_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  flag: z.lazy(() => flagsOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional()
}).strict();

export default flag_historyOrderByWithRelationInputSchema;
