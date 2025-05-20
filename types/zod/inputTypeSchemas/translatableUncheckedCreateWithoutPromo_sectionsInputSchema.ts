import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema';

export const translatableUncheckedCreateWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableUncheckedCreateWithoutPromo_sectionsInput> = z.object({
  translatable_id: z.string().uuid().optional(),
  translations: z.lazy(() => translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
  words: z.lazy(() => wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
  categories: z.lazy(() => categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional()
}).strict();

export default translatableUncheckedCreateWithoutPromo_sectionsInputSchema;
