import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';

export const user_rolesUncheckedCreateInputSchema: z.ZodType<Prisma.user_rolesUncheckedCreateInput> = z.object({
  user_roles_id: z.string().uuid().optional(),
  user_id: z.string(),
  role: z.lazy(() => USER_ROLESSchema).optional(),
  primary: z.boolean().optional().nullable()
}).strict();

export default user_rolesUncheckedCreateInputSchema;
