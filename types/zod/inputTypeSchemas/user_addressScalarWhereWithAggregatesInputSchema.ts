import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const user_addressScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_addressScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_addressScalarWhereWithAggregatesInputSchema),z.lazy(() => user_addressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_addressScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_addressScalarWhereWithAggregatesInputSchema),z.lazy(() => user_addressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  address_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  primary: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default user_addressScalarWhereWithAggregatesInputSchema;
