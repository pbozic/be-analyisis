import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const translationsTranslationPairCompoundUniqueInputSchema: z.ZodType<Prisma.translationsTranslationPairCompoundUniqueInput> = z.object({
  translatable_id: z.string(),
  language: z.string()
}).strict();

export default translationsTranslationPairCompoundUniqueInputSchema;
