import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsArgsSchema } from "../outputTypeSchemas/flagsArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const flag_historyIncludeSchema: z.ZodType<Prisma.flag_historyInclude> = z.object({
  flag: z.union([z.boolean(),z.lazy(() => flagsArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export default flag_historyIncludeSchema;
