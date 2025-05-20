import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { AllowancesNullableRelationFilterSchema } from './AllowancesNullableRelationFilterSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';

export const group_usersWhereInputSchema: z.ZodType<Prisma.group_usersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => group_usersWhereInputSchema),z.lazy(() => group_usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => group_usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => group_usersWhereInputSchema),z.lazy(() => group_usersWhereInputSchema).array() ]).optional(),
  group_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  parent_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  child_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  parent_user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  child_user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  allowance: z.union([ z.lazy(() => AllowancesNullableRelationFilterSchema),z.lazy(() => allowancesWhereInputSchema) ]).optional().nullable(),
}).strict();

export default group_usersWhereInputSchema;
