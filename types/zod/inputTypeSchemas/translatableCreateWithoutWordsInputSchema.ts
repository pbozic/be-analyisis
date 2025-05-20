import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateNestedManyWithoutTranslatableInputSchema } from './translationsCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesCreateNestedManyWithoutTranslatableInputSchema } from './categoriesCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsCreateNestedManyWithoutTranslatableInputSchema';

export const translatableCreateWithoutWordsInputSchema: z.ZodType<Prisma.translatableCreateWithoutWordsInput> = z.object({
  translatable_id: z.string().uuid().optional(),
  translations: z.lazy(() => translationsCreateNestedManyWithoutTranslatableInputSchema).optional(),
  categories: z.lazy(() => categoriesCreateNestedManyWithoutTranslatableInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sectionsCreateNestedManyWithoutTranslatableInputSchema).optional()
}).strict();

export default translatableCreateWithoutWordsInputSchema;
