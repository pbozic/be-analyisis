import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsSelectSchema } from '../inputTypeSchemas/order_lobby_itemsSelectSchema';
import { order_lobby_itemsIncludeSchema } from '../inputTypeSchemas/order_lobby_itemsIncludeSchema';

export const order_lobby_itemsArgsSchema: z.ZodType<Prisma.order_lobby_itemsDefaultArgs> = z.object({
  select: z.lazy(() => order_lobby_itemsSelectSchema).optional(),
  include: z.lazy(() => order_lobby_itemsIncludeSchema).optional(),
}).strict();

export default order_lobby_itemsArgsSchema;
