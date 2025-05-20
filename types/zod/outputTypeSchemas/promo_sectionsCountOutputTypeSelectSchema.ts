import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const promo_sectionsCountOutputTypeSelectSchema: z.ZodType<Prisma.promo_sectionsCountOutputTypeSelect> = z.object({
  promo_section_buy: z.boolean().optional(),
}).strict();

export default promo_sectionsCountOutputTypeSelectSchema;
