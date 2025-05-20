import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"

export const wallet_transfer_historyIncludeSchema: z.ZodType<Prisma.wallet_transfer_historyInclude> = z.object({
  delivery_order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
  taxi_order: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
}).strict()

export default wallet_transfer_historyIncludeSchema;
