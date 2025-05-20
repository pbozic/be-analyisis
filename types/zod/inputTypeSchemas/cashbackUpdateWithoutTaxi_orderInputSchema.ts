import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { EnumCASHBACK_TYPEFieldUpdateOperationsInputSchema } from './EnumCASHBACK_TYPEFieldUpdateOperationsInputSchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { EnumCASHBACK_SOURCEFieldUpdateOperationsInputSchema } from './EnumCASHBACK_SOURCEFieldUpdateOperationsInputSchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { EnumCASHBACK_STATUSFieldUpdateOperationsInputSchema } from './EnumCASHBACK_STATUSFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutCashbackNestedInputSchema } from './usersUpdateOneRequiredWithoutCashbackNestedInputSchema';
import { delivery_ordersUpdateOneWithoutCashbackNestedInputSchema } from './delivery_ordersUpdateOneWithoutCashbackNestedInputSchema';

export const cashbackUpdateWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackUpdateWithoutTaxi_orderInput> = z
	.object({
		cashback_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		type: z
			.union([z.lazy(() => CASHBACK_TYPESchema), z.lazy(() => EnumCASHBACK_TYPEFieldUpdateOperationsInputSchema)])
			.optional(),
		source: z
			.union([
				z.lazy(() => CASHBACK_SOURCESchema),
				z.lazy(() => EnumCASHBACK_SOURCEFieldUpdateOperationsInputSchema),
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => CASHBACK_STATUSSchema),
				z.lazy(() => EnumCASHBACK_STATUSFieldUpdateOperationsInputSchema),
			])
			.optional(),
		description: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		earned_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		expires_at: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		converted_at: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		user: z.lazy(() => usersUpdateOneRequiredWithoutCashbackNestedInputSchema).optional(),
		delivery_order: z.lazy(() => delivery_ordersUpdateOneWithoutCashbackNestedInputSchema).optional(),
	})
	.strict();

export default cashbackUpdateWithoutTaxi_orderInputSchema;
