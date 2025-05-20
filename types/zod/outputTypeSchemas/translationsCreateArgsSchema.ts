import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsIncludeSchema } from '../inputTypeSchemas/translationsIncludeSchema'
import { translationsCreateInputSchema } from '../inputTypeSchemas/translationsCreateInputSchema'
import { translationsUncheckedCreateInputSchema } from '../inputTypeSchemas/translationsUncheckedCreateInputSchema'
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

export const translationsCreateArgsSchema: z.ZodType<Prisma.translationsCreateArgs> = z.object({
  select: translationsSelectSchema.optional(),
  include: translationsIncludeSchema.optional(),
  data: z.union([ translationsCreateInputSchema,translationsUncheckedCreateInputSchema ]),
}).strict() ;

export default translationsCreateArgsSchema;
