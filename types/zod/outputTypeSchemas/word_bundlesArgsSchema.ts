import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesSelectSchema } from '../inputTypeSchemas/word_bundlesSelectSchema';
import { word_bundlesIncludeSchema } from '../inputTypeSchemas/word_bundlesIncludeSchema';

export const word_bundlesArgsSchema: z.ZodType<Prisma.word_bundlesDefaultArgs> = z.object({
  select: z.lazy(() => word_bundlesSelectSchema).optional(),
  include: z.lazy(() => word_bundlesIncludeSchema).optional(),
}).strict();

export default word_bundlesArgsSchema;
