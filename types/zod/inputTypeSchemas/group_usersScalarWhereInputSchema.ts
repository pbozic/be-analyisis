import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const group_usersScalarWhereInputSchema: z.ZodType<Prisma.group_usersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => group_usersScalarWhereInputSchema),z.lazy(() => group_usersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => group_usersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => group_usersScalarWhereInputSchema),z.lazy(() => group_usersScalarWhereInputSchema).array() ]).optional(),
  group_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  parent_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  child_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default group_usersScalarWhereInputSchema;
