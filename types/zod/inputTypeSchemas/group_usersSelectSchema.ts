import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { allowancesArgsSchema } from "../outputTypeSchemas/allowancesArgsSchema"

export const group_usersSelectSchema: z.ZodType<Prisma.group_usersSelect> = z.object({
  group_user_id: z.boolean().optional(),
  parent_user_id: z.boolean().optional(),
  child_user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  enabled: z.boolean().optional(),
  parent_user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  child_user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  allowance: z.union([z.boolean(),z.lazy(() => allowancesArgsSchema)]).optional(),
}).strict()

export default group_usersSelectSchema;
