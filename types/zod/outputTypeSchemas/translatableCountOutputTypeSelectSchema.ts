import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const translatableCountOutputTypeSelectSchema: z.ZodType<Prisma.translatableCountOutputTypeSelect> = z.object({
  translations: z.boolean().optional(),
  words: z.boolean().optional(),
  categories: z.boolean().optional(),
  promo_sections: z.boolean().optional(),
}).strict();

export default translatableCountOutputTypeSelectSchema;
