import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesIncludeSchema } from '../inputTypeSchemas/order_lobbiesIncludeSchema'
import { order_lobbiesWhereInputSchema } from '../inputTypeSchemas/order_lobbiesWhereInputSchema'
import { order_lobbiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobbiesOrderByWithRelationInputSchema'
import { order_lobbiesWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobbiesWhereUniqueInputSchema'
import { Order_lobbiesScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobbiesScalarFieldEnumSchema'
import { order_lobby_itemsFindManyArgsSchema } from "../outputTypeSchemas/order_lobby_itemsFindManyArgsSchema"
import { order_lobby_usersFindManyArgsSchema } from "../outputTypeSchemas/order_lobby_usersFindManyArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { Order_lobbiesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Order_lobbiesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const order_lobbiesSelectSchema: z.ZodType<Prisma.order_lobbiesSelect> = z.object({
  order_lobbies_id: z.boolean().optional(),
  lobby_name: z.boolean().optional(),
  lobby_description: z.boolean().optional(),
  active: z.boolean().optional(),
  delivery_location: z.boolean().optional(),
  courier_note: z.boolean().optional(),
  business_id: z.boolean().optional(),
  restaurant_id: z.boolean().optional(),
  creator_id: z.boolean().optional(),
  delivery_orders_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  order_lobby_items: z.union([z.boolean(),z.lazy(() => order_lobby_itemsFindManyArgsSchema)]).optional(),
  order_lobby_users: z.union([z.boolean(),z.lazy(() => order_lobby_usersFindManyArgsSchema)]).optional(),
  delivery_orders: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Order_lobbiesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const order_lobbiesFindManyArgsSchema: z.ZodType<Prisma.order_lobbiesFindManyArgs> = z.object({
  select: order_lobbiesSelectSchema.optional(),
  include: order_lobbiesIncludeSchema.optional(),
  where: order_lobbiesWhereInputSchema.optional(),
  orderBy: z.union([ order_lobbiesOrderByWithRelationInputSchema.array(),order_lobbiesOrderByWithRelationInputSchema ]).optional(),
  cursor: order_lobbiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Order_lobbiesScalarFieldEnumSchema,Order_lobbiesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default order_lobbiesFindManyArgsSchema;
