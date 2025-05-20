import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema } from './EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { documentsUncheckedUpdateManyWithoutTransactionsNestedInputSchema } from './documentsUncheckedUpdateManyWithoutTransactionsNestedInputSchema';

export const transactionsUncheckedUpdateWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsUncheckedUpdateWithoutDelivery_orderInput> =
	z
		.object({
			transaction_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			type: z
				.union([
					z.lazy(() => TRANSACTION_TYPESchema),
					z.lazy(() => EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			description: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			taxi_order_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			wallet_fund_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			documents: z.lazy(() => documentsUncheckedUpdateManyWithoutTransactionsNestedInputSchema).optional(),
		})
		.strict();

export default transactionsUncheckedUpdateWithoutDelivery_orderInputSchema;
