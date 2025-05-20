import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const local_productsCountOutputTypeSelectSchema: z.ZodType<Prisma.local_productsCountOutputTypeSelect> = z.object({
  prices: z.boolean().optional(),
}).strict();

export default local_productsCountOutputTypeSelectSchema;
