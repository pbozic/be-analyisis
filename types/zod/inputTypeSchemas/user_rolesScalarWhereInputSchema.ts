import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumUSER_ROLESFilterSchema } from './EnumUSER_ROLESFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';

export const user_rolesScalarWhereInputSchema: z.ZodType<Prisma.user_rolesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_rolesScalarWhereInputSchema),z.lazy(() => user_rolesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_rolesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_rolesScalarWhereInputSchema),z.lazy(() => user_rolesScalarWhereInputSchema).array() ]).optional(),
  user_roles_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUSER_ROLESFilterSchema),z.lazy(() => USER_ROLESSchema) ]).optional(),
  primary: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export default user_rolesScalarWhereInputSchema;
