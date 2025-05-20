import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersIncludeSchema } from '../inputTypeSchemas/order_lobby_usersIncludeSchema'
import { order_lobby_usersWhereInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereInputSchema'
import { order_lobby_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobby_usersOrderByWithRelationInputSchema'
import { order_lobby_usersWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereUniqueInputSchema'
import { Order_lobby_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobby_usersScalarFieldEnumSchema'
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

export const order_lobby_usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.order_lobby_usersFindFirstOrThrowArgs> = z.object({
  select: order_lobby_usersSelectSchema.optional(),
  include: order_lobby_usersIncludeSchema.optional(),
  where: order_lobby_usersWhereInputSchema.optional(),
  orderBy: z.union([ order_lobby_usersOrderByWithRelationInputSchema.array(),order_lobby_usersOrderByWithRelationInputSchema ]).optional(),
  cursor: order_lobby_usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Order_lobby_usersScalarFieldEnumSchema,Order_lobby_usersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default order_lobby_usersFindFirstOrThrowArgsSchema;
