import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsIncludeSchema } from '../inputTypeSchemas/translationsIncludeSchema'
import { translationsWhereInputSchema } from '../inputTypeSchemas/translationsWhereInputSchema'
import { translationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/translationsOrderByWithRelationInputSchema'
import { translationsWhereUniqueInputSchema } from '../inputTypeSchemas/translationsWhereUniqueInputSchema'
import { TranslationsScalarFieldEnumSchema } from '../inputTypeSchemas/TranslationsScalarFieldEnumSchema'
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

export const translationsFindManyArgsSchema: z.ZodType<Prisma.translationsFindManyArgs> = z.object({
  select: translationsSelectSchema.optional(),
  include: translationsIncludeSchema.optional(),
  where: translationsWhereInputSchema.optional(),
  orderBy: z.union([ translationsOrderByWithRelationInputSchema.array(),translationsOrderByWithRelationInputSchema ]).optional(),
  cursor: translationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TranslationsScalarFieldEnumSchema,TranslationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default translationsFindManyArgsSchema;
