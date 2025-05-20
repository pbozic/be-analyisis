import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateNestedManyWithoutTranslatableInputSchema } from './wordsCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesCreateNestedManyWithoutTranslatableInputSchema } from './categoriesCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsCreateNestedManyWithoutTranslatableInputSchema';

export const translatableCreateWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableCreateWithoutTranslationsInput> =
	z
		.object({
			translatable_id: z.string().uuid().optional(),
			words: z.lazy(() => wordsCreateNestedManyWithoutTranslatableInputSchema).optional(),
			categories: z.lazy(() => categoriesCreateNestedManyWithoutTranslatableInputSchema).optional(),
			promo_sections: z.lazy(() => promo_sectionsCreateNestedManyWithoutTranslatableInputSchema).optional(),
		})
		.strict();

export default translatableCreateWithoutTranslationsInputSchema;
