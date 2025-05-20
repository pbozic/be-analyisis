import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { translationsUpdateManyWithoutTranslatableNestedInputSchema } from './translationsUpdateManyWithoutTranslatableNestedInputSchema';
import { categoriesUpdateManyWithoutTranslatableNestedInputSchema } from './categoriesUpdateManyWithoutTranslatableNestedInputSchema';
import { promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema } from './promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema';

export const translatableUpdateWithoutWordsInputSchema: z.ZodType<Prisma.translatableUpdateWithoutWordsInput> = z
	.object({
		translatable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		translations: z.lazy(() => translationsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		categories: z.lazy(() => categoriesUpdateManyWithoutTranslatableNestedInputSchema).optional(),
		promo_sections: z.lazy(() => promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema).optional(),
	})
	.strict();

export default translatableUpdateWithoutWordsInputSchema;
