import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersSelectSchema } from '../inputTypeSchemas/order_lobby_usersSelectSchema';
import { order_lobby_usersIncludeSchema } from '../inputTypeSchemas/order_lobby_usersIncludeSchema';

export const order_lobby_usersArgsSchema: z.ZodType<Prisma.order_lobby_usersDefaultArgs> = z.object({
  select: z.lazy(() => order_lobby_usersSelectSchema).optional(),
  include: z.lazy(() => order_lobby_usersIncludeSchema).optional(),
}).strict();

export default order_lobby_usersArgsSchema;
