import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersIncludeSchema } from '../inputTypeSchemas/order_lobby_usersIncludeSchema'
import { order_lobby_usersWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereUniqueInputSchema'
import { order_lobby_usersCreateInputSchema } from '../inputTypeSchemas/order_lobby_usersCreateInputSchema'
import { order_lobby_usersUncheckedCreateInputSchema } from '../inputTypeSchemas/order_lobby_usersUncheckedCreateInputSchema'
import { order_lobby_usersUpdateInputSchema } from '../inputTypeSchemas/order_lobby_usersUpdateInputSchema'
import { order_lobby_usersUncheckedUpdateInputSchema } from '../inputTypeSchemas/order_lobby_usersUncheckedUpdateInputSchema'
import { order_lobbiesArgsSchema } from "../outputTypeSchemas/order_lobbiesArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const order_lobby_usersSelectSchema: z.ZodType<Prisma.order_lobby_usersSelect> = z.object({
  order_lobby_users_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  order_lobbies_id: z.boolean().optional(),
  limit: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  order_lobbies: z.union([z.boolean(),z.lazy(() => order_lobbiesArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const order_lobby_usersUpsertArgsSchema: z.ZodType<Prisma.order_lobby_usersUpsertArgs> = z.object({
  select: order_lobby_usersSelectSchema.optional(),
  include: order_lobby_usersIncludeSchema.optional(),
  where: order_lobby_usersWhereUniqueInputSchema,
  create: z.union([ order_lobby_usersCreateInputSchema,order_lobby_usersUncheckedCreateInputSchema ]),
  update: z.union([ order_lobby_usersUpdateInputSchema,order_lobby_usersUncheckedUpdateInputSchema ]),
}).strict() ;

export default order_lobby_usersUpsertArgsSchema;
