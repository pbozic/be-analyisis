import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { wallet_fundsFindManyArgsSchema } from "../outputTypeSchemas/wallet_fundsFindManyArgsSchema"
import { ReferralsCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReferralsCountOutputTypeArgsSchema"

export const referralsIncludeSchema: z.ZodType<Prisma.referralsInclude> = z.object({
  referrer: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  referred: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  credits: z.union([z.boolean(),z.lazy(() => wallet_fundsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReferralsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default referralsIncludeSchema;
