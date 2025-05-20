import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const addressesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.addressesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => addressesScalarWhereWithAggregatesInputSchema),z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => addressesScalarWhereWithAggregatesInputSchema),z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  address_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  latitude: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  longitude: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  house_number: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  postal: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default addressesScalarWhereWithAggregatesInputSchema;
