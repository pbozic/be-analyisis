import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';

export const business_clientsWhereInputSchema: z.ZodType<Prisma.business_clientsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => business_clientsWhereInputSchema),z.lazy(() => business_clientsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => business_clientsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => business_clientsWhereInputSchema),z.lazy(() => business_clientsWhereInputSchema).array() ]).optional(),
  business_clients_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telephone_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telephone_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  taxi_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional()
}).strict();

export default business_clientsWhereInputSchema;
