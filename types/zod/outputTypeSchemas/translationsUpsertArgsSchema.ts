import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsIncludeSchema } from '../inputTypeSchemas/translationsIncludeSchema'
import { translationsWhereUniqueInputSchema } from '../inputTypeSchemas/translationsWhereUniqueInputSchema'
import { translationsCreateInputSchema } from '../inputTypeSchemas/translationsCreateInputSchema'
import { translationsUncheckedCreateInputSchema } from '../inputTypeSchemas/translationsUncheckedCreateInputSchema'
import { translationsUpdateInputSchema } from '../inputTypeSchemas/translationsUpdateInputSchema'
import { translationsUncheckedUpdateInputSchema } from '../inputTypeSchemas/translationsUncheckedUpdateInputSchema'
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const translationsSelectSchema: z.ZodType<Prisma.translationsSelect> = z.object({
  translations_id: z.boolean().optional(),
  translatable_id: z.boolean().optional(),
  field: z.boolean().optional(),
  language: z.boolean().optional(),
  translation: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
}).strict()

export const translationsUpsertArgsSchema: z.ZodType<Prisma.translationsUpsertArgs> = z.object({
  select: translationsSelectSchema.optional(),
  include: translationsIncludeSchema.optional(),
  where: translationsWhereUniqueInputSchema,
  create: z.union([ translationsCreateInputSchema,translationsUncheckedCreateInputSchema ]),
  update: z.union([ translationsUpdateInputSchema,translationsUncheckedUpdateInputSchema ]),
}).strict() ;

export default translationsUpsertArgsSchema;
