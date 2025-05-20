import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesArgsSchema } from "../outputTypeSchemas/order_lobbiesArgsSchema"

export const order_lobby_itemsIncludeSchema: z.ZodType<Prisma.order_lobby_itemsInclude> = z.object({
  order_lobbies: z.union([z.boolean(),z.lazy(() => order_lobbiesArgsSchema)]).optional(),
}).strict()

export default order_lobby_itemsIncludeSchema;
