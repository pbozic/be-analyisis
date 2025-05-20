import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema';

export const translatableUncheckedCreateWithoutWordsInputSchema: z.ZodType<Prisma.translatableUncheckedCreateWithoutWordsInput> =
	z
		.object({
			translatable_id: z.string().uuid().optional(),
			translations: z.lazy(() => translationsUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
			categories: z.lazy(() => categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema).optional(),
			promo_sections: z
				.lazy(() => promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema)
				.optional(),
		})
		.strict();

export default translatableUncheckedCreateWithoutWordsInputSchema;
