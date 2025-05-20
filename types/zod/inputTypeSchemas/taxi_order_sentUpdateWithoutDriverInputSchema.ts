import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { taxi_ordersUpdateOneWithoutHistoryNestedInputSchema } from './taxi_ordersUpdateOneWithoutHistoryNestedInputSchema';

export const taxi_order_sentUpdateWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateWithoutDriverInput> =
	z
		.object({
			taxi_order_sent_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			accepted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			rejected: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			order: z.lazy(() => taxi_ordersUpdateOneWithoutHistoryNestedInputSchema).optional(),
		})
		.strict();

export default taxi_order_sentUpdateWithoutDriverInputSchema;
