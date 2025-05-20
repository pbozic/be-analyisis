import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { allowancesArgsSchema } from "../outputTypeSchemas/allowancesArgsSchema"

export const group_usersIncludeSchema: z.ZodType<Prisma.group_usersInclude> = z.object({
  parent_user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  child_user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  allowance: z.union([z.boolean(),z.lazy(() => allowancesArgsSchema)]).optional(),
}).strict()

export default group_usersIncludeSchema;
