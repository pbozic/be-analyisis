import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_itemsCreateallergensInputSchema: z.ZodType<Prisma.menu_itemsCreateallergensInput> = z.object({
  set: z.string().array()
}).strict();

export default menu_itemsCreateallergensInputSchema;
