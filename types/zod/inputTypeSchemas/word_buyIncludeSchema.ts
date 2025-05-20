import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsArgsSchema } from "../outputTypeSchemas/wordsArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"

export const word_buyIncludeSchema: z.ZodType<Prisma.word_buyInclude> = z.object({
  word: z.union([z.boolean(),z.lazy(() => wordsArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
}).strict()

export default word_buyIncludeSchema;
