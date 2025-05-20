import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { wordsUpdateOneRequiredWithoutSubscriptionsNestedInputSchema } from './wordsUpdateOneRequiredWithoutSubscriptionsNestedInputSchema';
import { businessUpdateOneRequiredWithoutWord_buysNestedInputSchema } from './businessUpdateOneRequiredWithoutWord_buysNestedInputSchema';

export const word_buyUpdateInputSchema: z.ZodType<Prisma.word_buyUpdateInput> = z
	.object({
		word_buy_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		stripe_subscription_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
		active_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		expires_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		deleted_at: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		word: z.lazy(() => wordsUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
		business: z.lazy(() => businessUpdateOneRequiredWithoutWord_buysNestedInputSchema).optional(),
	})
	.strict();

export default word_buyUpdateInputSchema;
