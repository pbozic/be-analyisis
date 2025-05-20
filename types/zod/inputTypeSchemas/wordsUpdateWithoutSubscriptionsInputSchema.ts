import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { categoriesUpdateOneWithoutWordsNestedInputSchema } from './categoriesUpdateOneWithoutWordsNestedInputSchema';
import { translatableUpdateOneRequiredWithoutWordsNestedInputSchema } from './translatableUpdateOneRequiredWithoutWordsNestedInputSchema';
import { word_bundlesUpdateManyWithoutWordsNestedInputSchema } from './word_bundlesUpdateManyWithoutWordsNestedInputSchema';

export const wordsUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsUpdateWithoutSubscriptionsInput> = z
	.object({
		word_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		word: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		popularity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		category: z.lazy(() => categoriesUpdateOneWithoutWordsNestedInputSchema).optional(),
		translatable: z.lazy(() => translatableUpdateOneRequiredWithoutWordsNestedInputSchema).optional(),
		bundles: z.lazy(() => word_bundlesUpdateManyWithoutWordsNestedInputSchema).optional(),
	})
	.strict();

export default wordsUpdateWithoutSubscriptionsInputSchema;
