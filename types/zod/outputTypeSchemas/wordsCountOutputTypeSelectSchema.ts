import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const wordsCountOutputTypeSelectSchema: z.ZodType<Prisma.wordsCountOutputTypeSelect> = z.object({
  subscriptions: z.boolean().optional(),
  bundles: z.boolean().optional(),
}).strict();

export default wordsCountOutputTypeSelectSchema;
