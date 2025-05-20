import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const allowancesUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.allowancesUncheckedUpdateWithoutUserInput> =
	z
		.object({
			allowance_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			business_users_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			amount_taxi_wallet: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			amount_transfer_wallet: z
				.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
				.optional(),
			amount_delivery_wallet: z
				.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
				.optional(),
			amount_any_wallet: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			amount_taxi_purchase_order: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			amount_transfer_purchase_order: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			amount_delivery_purchase_order: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			amount_any_purchase_order: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export default allowancesUncheckedUpdateWithoutUserInputSchema;
