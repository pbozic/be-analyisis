import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { wordsUncheckedUpdateManyWithoutBundlesNestedInputSchema } from './wordsUncheckedUpdateManyWithoutBundlesNestedInputSchema';

export const word_bundlesUncheckedUpdateInputSchema: z.ZodType<Prisma.word_bundlesUncheckedUpdateInput> = z
	.object({
		id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		description: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		words: z.lazy(() => wordsUncheckedUpdateManyWithoutBundlesNestedInputSchema).optional(),
	})
	.strict();

export default word_bundlesUncheckedUpdateInputSchema;
