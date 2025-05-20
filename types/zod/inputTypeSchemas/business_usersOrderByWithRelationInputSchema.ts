import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { addressesOrderByWithRelationInputSchema } from './addressesOrderByWithRelationInputSchema';
import { allowancesOrderByWithRelationInputSchema } from './allowancesOrderByWithRelationInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';

export const business_usersOrderByWithRelationInputSchema: z.ZodType<Prisma.business_usersOrderByWithRelationInput> = z.object({
  business_users_id: z.lazy(() => SortOrderSchema).optional(),
  online: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  company_role: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  operating_address_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
  operating_address: z.lazy(() => addressesOrderByWithRelationInputSchema).optional(),
  allowance: z.lazy(() => allowancesOrderByWithRelationInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default business_usersOrderByWithRelationInputSchema;
