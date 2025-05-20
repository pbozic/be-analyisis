import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_itemsUpdatesidesInputSchema: z.ZodType<Prisma.menu_itemsUpdatesidesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default menu_itemsUpdatesidesInputSchema;
