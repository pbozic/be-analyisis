import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const translationsUncheckedCreateWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsUncheckedCreateWithoutTranslatableInput> = z.object({
  translations_id: z.string().uuid().optional(),
  field: z.string().optional().nullable(),
  language: z.string(),
  translation: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default translationsUncheckedCreateWithoutTranslatableInputSchema;
