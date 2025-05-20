import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const allergensSelectSchema: z.ZodType<Prisma.allergensSelect> = z.object({
  allergen_id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  code: z.boolean().optional(),
}).strict()

export default allergensSelectSchema;
