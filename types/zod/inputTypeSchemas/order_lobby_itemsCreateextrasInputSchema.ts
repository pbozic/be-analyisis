import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_itemsCreateextrasInputSchema: z.ZodType<Prisma.order_lobby_itemsCreateextrasInput> = z.object({
  set: z.string().array()
}).strict();

export default order_lobby_itemsCreateextrasInputSchema;
