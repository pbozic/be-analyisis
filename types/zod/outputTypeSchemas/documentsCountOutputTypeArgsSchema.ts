import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsCountOutputTypeSelectSchema } from './documentsCountOutputTypeSelectSchema';

export const documentsCountOutputTypeArgsSchema: z.ZodType<Prisma.documentsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => documentsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default documentsCountOutputTypeSelectSchema;
