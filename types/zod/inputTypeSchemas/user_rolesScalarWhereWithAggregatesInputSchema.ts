import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumUSER_ROLESWithAggregatesFilterSchema } from './EnumUSER_ROLESWithAggregatesFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';

export const user_rolesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_rolesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_rolesScalarWhereWithAggregatesInputSchema),z.lazy(() => user_rolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_rolesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_rolesScalarWhereWithAggregatesInputSchema),z.lazy(() => user_rolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_roles_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUSER_ROLESWithAggregatesFilterSchema),z.lazy(() => USER_ROLESSchema) ]).optional(),
  primary: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export default user_rolesScalarWhereWithAggregatesInputSchema;
