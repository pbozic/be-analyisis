import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { word_buyUncheckedUpdateManyWithoutWordNestedInputSchema } from './word_buyUncheckedUpdateManyWithoutWordNestedInputSchema';
import { word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema } from './word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema';

export const wordsUncheckedUpdateWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsUncheckedUpdateWithoutTranslatableInput> =
	z
		.object({
			word_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			word: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			popularity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			categories_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			subscriptions: z.lazy(() => word_buyUncheckedUpdateManyWithoutWordNestedInputSchema).optional(),
			bundles: z.lazy(() => word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema).optional(),
		})
		.strict();

export default wordsUncheckedUpdateWithoutTranslatableInputSchema;
