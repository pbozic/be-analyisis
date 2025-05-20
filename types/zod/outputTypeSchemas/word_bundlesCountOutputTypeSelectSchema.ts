import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const word_bundlesCountOutputTypeSelectSchema: z.ZodType<Prisma.word_bundlesCountOutputTypeSelect> = z.object({
  words: z.boolean().optional(),
}).strict();

export default word_bundlesCountOutputTypeSelectSchema;
