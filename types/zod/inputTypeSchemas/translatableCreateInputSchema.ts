import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateNestedManyWithoutTranslatableInputSchema } from './translationsCreateNestedManyWithoutTranslatableInputSchema';
import { wordsCreateNestedManyWithoutTranslatableInputSchema } from './wordsCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesCreateNestedManyWithoutTranslatableInputSchema } from './categoriesCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsCreateNestedManyWithoutTranslatableInputSchema';

export const translatableCreateInputSchema: z.ZodType<Prisma.translatableCreateInput> = z.object({
  translatable_id: z.string().uuid().optional(),
  translations: z.lazy(() => translationsCreateNestedManyWithoutTranslatableInputSchema).optional(),
  words: z.lazy(() => wordsCreateNestedManyWithoutTranslatableInputSchema).optional(),
  categories: z.lazy(() => categoriesCreateNestedManyWithoutTranslatableInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sectionsCreateNestedManyWithoutTranslatableInputSchema).optional()
}).strict();

export default translatableCreateInputSchema;
