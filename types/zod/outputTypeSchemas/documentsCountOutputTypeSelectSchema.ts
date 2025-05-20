import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const documentsCountOutputTypeSelectSchema: z.ZodType<Prisma.documentsCountOutputTypeSelect> = z.object({
  files: z.boolean().optional(),
}).strict();

export default documentsCountOutputTypeSelectSchema;
