import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesIncludeSchema } from '../inputTypeSchemas/word_bundlesIncludeSchema'
import { word_bundlesWhereUniqueInputSchema } from '../inputTypeSchemas/word_bundlesWhereUniqueInputSchema'
import { word_bundlesCreateInputSchema } from '../inputTypeSchemas/word_bundlesCreateInputSchema'
import { word_bundlesUncheckedCreateInputSchema } from '../inputTypeSchemas/word_bundlesUncheckedCreateInputSchema'
import { word_bundlesUpdateInputSchema } from '../inputTypeSchemas/word_bundlesUpdateInputSchema'
import { word_bundlesUncheckedUpdateInputSchema } from '../inputTypeSchemas/word_bundlesUncheckedUpdateInputSchema'
import { wordsFindManyArgsSchema } from "../outputTypeSchemas/wordsFindManyArgsSchema"
import { Word_bundlesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Word_bundlesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const word_bundlesSelectSchema: z.ZodType<Prisma.word_bundlesSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  words: z.union([z.boolean(),z.lazy(() => wordsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Word_bundlesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const word_bundlesUpsertArgsSchema: z.ZodType<Prisma.word_bundlesUpsertArgs> = z.object({
  select: word_bundlesSelectSchema.optional(),
  include: word_bundlesIncludeSchema.optional(),
  where: word_bundlesWhereUniqueInputSchema,
  create: z.union([ word_bundlesCreateInputSchema,word_bundlesUncheckedCreateInputSchema ]),
  update: z.union([ word_bundlesUpdateInputSchema,word_bundlesUncheckedUpdateInputSchema ]),
}).strict() ;

export default word_bundlesUpsertArgsSchema;
