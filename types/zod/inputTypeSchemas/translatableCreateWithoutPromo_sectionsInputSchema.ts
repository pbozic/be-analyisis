import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateNestedManyWithoutTranslatableInputSchema } from './translationsCreateNestedManyWithoutTranslatableInputSchema';
import { wordsCreateNestedManyWithoutTranslatableInputSchema } from './wordsCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesCreateNestedManyWithoutTranslatableInputSchema } from './categoriesCreateNestedManyWithoutTranslatableInputSchema';

export const translatableCreateWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableCreateWithoutPromo_sectionsInput> =
	z
		.object({
			translatable_id: z.string().uuid().optional(),
			translations: z.lazy(() => translationsCreateNestedManyWithoutTranslatableInputSchema).optional(),
			words: z.lazy(() => wordsCreateNestedManyWithoutTranslatableInputSchema).optional(),
			categories: z.lazy(() => categoriesCreateNestedManyWithoutTranslatableInputSchema).optional(),
		})
		.strict();

export default translatableCreateWithoutPromo_sectionsInputSchema;
