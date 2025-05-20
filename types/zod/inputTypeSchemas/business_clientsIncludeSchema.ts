import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { Business_clientsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_clientsCountOutputTypeArgsSchema"

export const business_clientsIncludeSchema: z.ZodType<Prisma.business_clientsInclude> = z.object({
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_clientsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default business_clientsIncludeSchema;
