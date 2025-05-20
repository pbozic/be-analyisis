import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_usersCreateManyUsersInputSchema: z.ZodType<Prisma.order_lobby_usersCreateManyUsersInput> = z.object({
  order_lobby_users_id: z.string().uuid().optional(),
  order_lobbies_id: z.string(),
  limit: z.number(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default order_lobby_usersCreateManyUsersInputSchema;
