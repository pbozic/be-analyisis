import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesWhereInputSchema } from './user_rolesWhereInputSchema';

export const User_rolesListRelationFilterSchema: z.ZodType<Prisma.User_rolesListRelationFilter> = z.object({
  every: z.lazy(() => user_rolesWhereInputSchema).optional(),
  some: z.lazy(() => user_rolesWhereInputSchema).optional(),
  none: z.lazy(() => user_rolesWhereInputSchema).optional()
}).strict();

export default User_rolesListRelationFilterSchema;
