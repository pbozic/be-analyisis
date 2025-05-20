import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const group_usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.group_usersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => group_usersScalarWhereWithAggregatesInputSchema),z.lazy(() => group_usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => group_usersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => group_usersScalarWhereWithAggregatesInputSchema),z.lazy(() => group_usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  group_user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  child_user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default group_usersScalarWhereWithAggregatesInputSchema;
