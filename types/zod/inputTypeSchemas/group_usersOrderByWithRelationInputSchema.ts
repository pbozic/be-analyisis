import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { allowancesOrderByWithRelationInputSchema } from './allowancesOrderByWithRelationInputSchema';

export const group_usersOrderByWithRelationInputSchema: z.ZodType<Prisma.group_usersOrderByWithRelationInput> = z.object({
  group_user_id: z.lazy(() => SortOrderSchema).optional(),
  parent_user_id: z.lazy(() => SortOrderSchema).optional(),
  child_user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  parent_user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  child_user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  allowance: z.lazy(() => allowancesOrderByWithRelationInputSchema).optional()
}).strict();

export default group_usersOrderByWithRelationInputSchema;
