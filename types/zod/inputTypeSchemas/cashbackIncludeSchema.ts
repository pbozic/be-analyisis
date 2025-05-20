import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"

export const cashbackIncludeSchema: z.ZodType<Prisma.cashbackInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  taxi_order: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
  delivery_order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
}).strict()

export default cashbackIncludeSchema;
