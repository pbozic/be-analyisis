import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema';
import { wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema';
import { categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema';
import { promo_sectionsUncheckedUpdateManyWithoutTranslatableNestedInputSchema } from './promo_sectionsUncheckedUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUncheckedUpdateInputSchema: z.ZodType<Prisma.translatableUncheckedUpdateInput> = z.object({
  translatable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  translations: z.lazy(() => translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  words: z.lazy(() => wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  categories: z.lazy(() => categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sectionsUncheckedUpdateManyWithoutTranslatableNestedInputSchema).optional()
}).strict();

export default translatableUncheckedUpdateInputSchema;
