import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersArgsSchema } from "../outputTypeSchemas/group_usersArgsSchema"
import { business_usersArgsSchema } from "../outputTypeSchemas/business_usersArgsSchema"

export const allowancesIncludeSchema: z.ZodType<Prisma.allowancesInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => group_usersArgsSchema)]).optional(),
  business_user: z.union([z.boolean(),z.lazy(() => business_usersArgsSchema)]).optional(),
}).strict()

export default allowancesIncludeSchema;
