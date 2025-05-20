import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_itemsUpdatesidesInputSchema: z.ZodType<Prisma.order_lobby_itemsUpdatesidesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default order_lobby_itemsUpdatesidesInputSchema;
