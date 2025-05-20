import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_itemsUpdateextrasInputSchema: z.ZodType<Prisma.order_lobby_itemsUpdateextrasInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default order_lobby_itemsUpdateextrasInputSchema;
