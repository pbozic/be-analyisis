import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const transactionsCountOutputTypeSelectSchema: z.ZodType<Prisma.transactionsCountOutputTypeSelect> = z.object({
  documents: z.boolean().optional(),
}).strict();

export default transactionsCountOutputTypeSelectSchema;
