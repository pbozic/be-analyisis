import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"

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

export default translationsSelectSchema;
