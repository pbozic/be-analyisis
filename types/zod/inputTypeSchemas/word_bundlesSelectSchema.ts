import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsFindManyArgsSchema } from "../outputTypeSchemas/wordsFindManyArgsSchema"
import { Word_bundlesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Word_bundlesCountOutputTypeArgsSchema"

export const word_bundlesSelectSchema: z.ZodType<Prisma.word_bundlesSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  words: z.union([z.boolean(),z.lazy(() => wordsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Word_bundlesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default word_bundlesSelectSchema;
