import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema } from './EnumTRANSACTION_TYPEFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { delivery_ordersUpdateOneWithoutTransactionsNestedInputSchema } from './delivery_ordersUpdateOneWithoutTransactionsNestedInputSchema';
import { usersUpdateOneRequiredWithoutTransactionsNestedInputSchema } from './usersUpdateOneRequiredWithoutTransactionsNestedInputSchema';
import { documentsUpdateManyWithoutTransactionsNestedInputSchema } from './documentsUpdateManyWithoutTransactionsNestedInputSchema';
import { wallet_fundsUpdateOneWithoutTransactionsNestedInputSchema } from './wallet_fundsUpdateOneWithoutTransactionsNestedInputSchema';

export const transactionsUpdateWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsUpdateWithoutTaxi_orderInput> =
	z
		.object({
			transaction_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
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
			delivery_order: z.lazy(() => delivery_ordersUpdateOneWithoutTransactionsNestedInputSchema).optional(),
			user: z.lazy(() => usersUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
			documents: z.lazy(() => documentsUpdateManyWithoutTransactionsNestedInputSchema).optional(),
			wallet_funds: z.lazy(() => wallet_fundsUpdateOneWithoutTransactionsNestedInputSchema).optional(),
		})
		.strict();

export default transactionsUpdateWithoutTaxi_orderInputSchema;
