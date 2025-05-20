import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersWhereInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereInputSchema'
import { order_lobby_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobby_usersOrderByWithRelationInputSchema'
import { order_lobby_usersWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereUniqueInputSchema'

export const order_lobby_usersAggregateArgsSchema: z.ZodType<Prisma.order_lobby_usersAggregateArgs> = z.object({
  where: order_lobby_usersWhereInputSchema.optional(),
  orderBy: z.union([ order_lobby_usersOrderByWithRelationInputSchema.array(),order_lobby_usersOrderByWithRelationInputSchema ]).optional(),
  cursor: order_lobby_usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default order_lobby_usersAggregateArgsSchema;
