import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema } from './order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema';
import { order_lobby_usersWhereInputSchema } from './order_lobby_usersWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Order_lobbiesRelationFilterSchema } from './Order_lobbiesRelationFilterSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const order_lobby_usersWhereUniqueInputSchema: z.ZodType<Prisma.order_lobby_usersWhereUniqueInput> = z.union([
  z.object({
    order_lobby_users_id: z.string().uuid(),
    user_id_order_lobbies_id: z.lazy(() => order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema)
  }),
  z.object({
    order_lobby_users_id: z.string().uuid(),
  }),
  z.object({
    user_id_order_lobbies_id: z.lazy(() => order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  order_lobby_users_id: z.string().uuid().optional(),
  user_id_order_lobbies_id: z.lazy(() => order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => order_lobby_usersWhereInputSchema),z.lazy(() => order_lobby_usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => order_lobby_usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => order_lobby_usersWhereInputSchema),z.lazy(() => order_lobby_usersWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_lobbies_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  limit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_lobbies: z.union([ z.lazy(() => Order_lobbiesRelationFilterSchema),z.lazy(() => order_lobbiesWhereInputSchema) ]).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict());

export default order_lobby_usersWhereUniqueInputSchema;
