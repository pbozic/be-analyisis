import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { addressesArgsSchema } from "../outputTypeSchemas/addressesArgsSchema"
import { allowancesArgsSchema } from "../outputTypeSchemas/allowancesArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { Business_usersCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_usersCountOutputTypeArgsSchema"

export const business_usersIncludeSchema: z.ZodType<Prisma.business_usersInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  operating_address: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  allowance: z.union([z.boolean(),z.lazy(() => allowancesArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_usersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default business_usersIncludeSchema;
