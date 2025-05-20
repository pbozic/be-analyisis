import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { usersCreateNestedOneWithoutUser_rolesInputSchema } from './usersCreateNestedOneWithoutUser_rolesInputSchema';

export const user_rolesCreateInputSchema: z.ZodType<Prisma.user_rolesCreateInput> = z.object({
  user_roles_id: z.string().uuid().optional(),
  role: z.lazy(() => USER_ROLESSchema).optional(),
  primary: z.boolean().optional().nullable(),
  user: z.lazy(() => usersCreateNestedOneWithoutUser_rolesInputSchema)
}).strict();

export default user_rolesCreateInputSchema;
