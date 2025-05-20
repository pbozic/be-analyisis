import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUpdateManyWithoutTranslatableNestedInputSchema';
import { wordsUpdateManyWithoutTranslatableNestedInputSchema } from './wordsUpdateManyWithoutTranslatableNestedInputSchema';
import { categoriesUpdateManyWithoutTranslatableNestedInputSchema } from './categoriesUpdateManyWithoutTranslatableNestedInputSchema';
import { promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema } from './promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUpdateInputSchema: z.ZodType<Prisma.translatableUpdateInput> = z
	.object({
		translatable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		translations: z.lazy(() => translationsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		words: z.lazy(() => wordsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		categories: z.lazy(() => categoriesUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		promo_sections: z.lazy(() => promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
	})
	.strict();

export default translatableUpdateInputSchema;
