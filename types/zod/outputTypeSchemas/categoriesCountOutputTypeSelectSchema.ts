import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const categoriesCountOutputTypeSelectSchema: z.ZodType<Prisma.categoriesCountOutputTypeSelect> = z.object({
  menu_categories: z.boolean().optional(),
  promo_ads_category: z.boolean().optional(),
  sub_categories: z.boolean().optional(),
  words: z.boolean().optional(),
}).strict();

export default categoriesCountOutputTypeSelectSchema;
