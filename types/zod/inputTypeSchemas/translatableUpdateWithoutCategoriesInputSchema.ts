import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUpdateManyWithoutTranslatableNestedInputSchema';
import { wordsUpdateManyWithoutTranslatableNestedInputSchema } from './wordsUpdateManyWithoutTranslatableNestedInputSchema';
import { promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema } from './promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableUpdateWithoutCategoriesInput> = z.object({
  translatable_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  translations: z.lazy(() => translationsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  words: z.lazy(() => wordsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
  promo_sections: z.lazy(() => promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema).optional()
}).strict();

export default translatableUpdateWithoutCategoriesInputSchema;
