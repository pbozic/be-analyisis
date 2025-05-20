import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema';
import { wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema';
import { categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUncheckedUpdateWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableUncheckedUpdateWithoutPromo_sectionsInput> = z.object({
  translatable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  translations: z.lazy(() => translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  words: z.lazy(() => wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  categories: z.lazy(() => categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional()
}).strict();

export default translatableUncheckedUpdateWithoutPromo_sectionsInputSchema;
