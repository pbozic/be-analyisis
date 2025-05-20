import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema';

export const translatableUncheckedCreateWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableUncheckedCreateWithoutTranslationsInput> =
	z
		.object({
			translatable_id: z.string().uuid().optional(),
			words: z.lazy(() => wordsUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
			categories: z.lazy(() => categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
			promo_sections: z
				.lazy(() => promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema)
				.optional(),
		})
		.strict();

export default translatableUncheckedCreateWithoutTranslationsInputSchema;
