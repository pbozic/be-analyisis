import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateNestedManyWithoutTranslatableInputSchema } from './translationsCreateNestedManyWithoutTranslatableInputSchema';
import { wordsCreateNestedManyWithoutTranslatableInputSchema } from './wordsCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsCreateNestedManyWithoutTranslatableInputSchema';

export const translatableCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableCreateWithoutCategoriesInput> = z.object({
  translatable_id: z.string().uuid().optional(),
  translations: z.lazy(() => translationsCreateNestedManyWithoutTranslatableInputSchema).optional(),
  words: z.lazy(() => wordsCreateNestedManyWithoutTranslatableInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sectionsCreateNestedManyWithoutTranslatableInputSchema).optional()
}).strict();

export default translatableCreateWithoutCategoriesInputSchema;
