import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema: z.ZodType<Prisma.order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInput> = z.object({
  user_id: z.string(),
  order_lobbies_id: z.string()
}).strict();

export default order_lobby_usersUser_idOrder_lobbies_idCompoundUniqueInputSchema;
