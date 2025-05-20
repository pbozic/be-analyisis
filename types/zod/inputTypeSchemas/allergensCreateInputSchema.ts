import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const allergensCreateInputSchema: z.ZodType<Prisma.allergensCreateInput> = z.object({
  allergen_id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  code: z.number().int()
}).strict();

export default allergensCreateInputSchema;
