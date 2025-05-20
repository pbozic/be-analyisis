import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const word_bundlesCreateManyInputSchema: z.ZodType<Prisma.word_bundlesCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();

export default word_bundlesCreateManyInputSchema;
