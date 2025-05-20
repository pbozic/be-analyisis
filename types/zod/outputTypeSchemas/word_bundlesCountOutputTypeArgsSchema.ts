import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesCountOutputTypeSelectSchema } from './word_bundlesCountOutputTypeSelectSchema';

export const word_bundlesCountOutputTypeArgsSchema: z.ZodType<Prisma.word_bundlesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => word_bundlesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default word_bundlesCountOutputTypeSelectSchema;
