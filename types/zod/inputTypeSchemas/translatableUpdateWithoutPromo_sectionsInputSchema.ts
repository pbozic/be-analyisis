import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUpdateManyWithoutTranslatableNestedInputSchema';
import { wordsUpdateManyWithoutTranslatableNestedInputSchema } from './wordsUpdateManyWithoutTranslatableNestedInputSchema';
import { categoriesUpdateManyWithoutTranslatableNestedInputSchema } from './categoriesUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUpdateWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableUpdateWithoutPromo_sectionsInput> =
	z
		.object({
			translatable_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			translations: z.lazy(() => translationsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
			words: z.lazy(() => wordsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
			categories: z.lazy(() => categoriesUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		})
		.strict();

export default translatableUpdateWithoutPromo_sectionsInputSchema;
