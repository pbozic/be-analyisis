import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema } from './word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema';

export const wordsUncheckedUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsUncheckedUpdateWithoutSubscriptionsInput> =
	z
		.object({
			word_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			word: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			popularity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			categories_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			translatable_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			bundles: z.lazy(() => word_bundlesUncheckedUpdateManyWithoutWordsNestedInputSchema).optional(),
		})
		.strict();

export default wordsUncheckedUpdateWithoutSubscriptionsInputSchema;
