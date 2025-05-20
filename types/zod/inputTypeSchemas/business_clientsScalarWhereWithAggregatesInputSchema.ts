import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const business_clientsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.business_clientsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => business_clientsScalarWhereWithAggregatesInputSchema),z.lazy(() => business_clientsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => business_clientsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => business_clientsScalarWhereWithAggregatesInputSchema),z.lazy(() => business_clientsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  business_clients_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  telephone_code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  telephone_number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default business_clientsScalarWhereWithAggregatesInputSchema;
