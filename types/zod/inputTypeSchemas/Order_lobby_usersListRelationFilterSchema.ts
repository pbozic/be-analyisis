import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereInputSchema } from './order_lobby_usersWhereInputSchema';

export const Order_lobby_usersListRelationFilterSchema: z.ZodType<Prisma.Order_lobby_usersListRelationFilter> = z.object({
  every: z.lazy(() => order_lobby_usersWhereInputSchema).optional(),
  some: z.lazy(() => order_lobby_usersWhereInputSchema).optional(),
  none: z.lazy(() => order_lobby_usersWhereInputSchema).optional()
}).strict();

export default Order_lobby_usersListRelationFilterSchema;
