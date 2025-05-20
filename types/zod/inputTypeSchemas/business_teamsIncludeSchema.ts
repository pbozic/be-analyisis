import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersFindManyArgsSchema } from "../outputTypeSchemas/usersFindManyArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { Business_teamsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_teamsCountOutputTypeArgsSchema"

export const business_teamsIncludeSchema: z.ZodType<Prisma.business_teamsInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => usersFindManyArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_teamsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default business_teamsIncludeSchema;
