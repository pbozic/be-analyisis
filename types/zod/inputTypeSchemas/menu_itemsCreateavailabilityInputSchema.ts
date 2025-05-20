import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_itemsCreateavailabilityInputSchema: z.ZodType<Prisma.menu_itemsCreateavailabilityInput> = z.object({
  set: z.string().array()
}).strict();

export default menu_itemsCreateavailabilityInputSchema;
