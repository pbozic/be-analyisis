import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const flagsCreateWithoutHistoryInputSchema: z.ZodType<Prisma.flagsCreateWithoutHistoryInput> = z.object({
  flag_id: z.string().uuid().optional(),
  name: z.string(),
  status: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default flagsCreateWithoutHistoryInputSchema;
