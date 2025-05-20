import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';

export const business_clientsOrderByWithRelationInputSchema: z.ZodType<Prisma.business_clientsOrderByWithRelationInput> = z.object({
  business_clients_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  telephone: z.lazy(() => SortOrderSchema).optional(),
  telephone_code: z.lazy(() => SortOrderSchema).optional(),
  telephone_number: z.lazy(() => SortOrderSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default business_clientsOrderByWithRelationInputSchema;
