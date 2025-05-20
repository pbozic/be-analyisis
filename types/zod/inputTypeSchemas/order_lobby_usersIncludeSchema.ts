import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesArgsSchema } from "../outputTypeSchemas/order_lobbiesArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const order_lobby_usersIncludeSchema: z.ZodType<Prisma.order_lobby_usersInclude> = z.object({
  order_lobbies: z.union([z.boolean(),z.lazy(() => order_lobbiesArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export default order_lobby_usersIncludeSchema;
