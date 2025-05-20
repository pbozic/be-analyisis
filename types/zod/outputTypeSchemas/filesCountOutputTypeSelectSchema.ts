import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const filesCountOutputTypeSelectSchema: z.ZodType<Prisma.filesCountOutputTypeSelect> = z.object({
  categories: z.boolean().optional(),
  promo_banners: z.boolean().optional(),
}).strict();

export default filesCountOutputTypeSelectSchema;
