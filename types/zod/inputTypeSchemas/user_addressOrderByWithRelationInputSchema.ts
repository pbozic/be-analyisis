import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { addressesOrderByWithRelationInputSchema } from './addressesOrderByWithRelationInputSchema';

export const user_addressOrderByWithRelationInputSchema: z.ZodType<Prisma.user_addressOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  address_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  primary: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  address: z.lazy(() => addressesOrderByWithRelationInputSchema).optional()
}).strict();

export default user_addressOrderByWithRelationInputSchema;
