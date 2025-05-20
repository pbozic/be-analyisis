import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsIncludeSchema } from '../inputTypeSchemas/wordsIncludeSchema'
import { wordsWhereUniqueInputSchema } from '../inputTypeSchemas/wordsWhereUniqueInputSchema'
import { categoriesArgsSchema } from "../outputTypeSchemas/categoriesArgsSchema"
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"
import { word_buyFindManyArgsSchema } from "../outputTypeSchemas/word_buyFindManyArgsSchema"
import { word_bundlesFindManyArgsSchema } from "../outputTypeSchemas/word_bundlesFindManyArgsSchema"
import { WordsCountOutputTypeArgsSchema } from "../outputTypeSchemas/WordsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const wordsSelectSchema: z.ZodType<Prisma.wordsSelect> = z.object({
  word_id: z.boolean().optional(),
  word: z.boolean().optional(),
  popularity: z.boolean().optional(),
  categories_id: z.boolean().optional(),
  translatable_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
  subscriptions: z.union([z.boolean(),z.lazy(() => word_buyFindManyArgsSchema)]).optional(),
  bundles: z.union([z.boolean(),z.lazy(() => word_bundlesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WordsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const wordsDeleteArgsSchema: z.ZodType<Prisma.wordsDeleteArgs> = z.object({
  select: wordsSelectSchema.optional(),
  include: wordsIncludeSchema.optional(),
  where: wordsWhereUniqueInputSchema,
}).strict() ;

export default wordsDeleteArgsSchema;
