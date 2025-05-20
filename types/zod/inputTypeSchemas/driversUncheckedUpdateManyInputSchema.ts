import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { driversUpdateregionsInputSchema } from './driversUpdateregionsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';

export const driversUncheckedUpdateManyInputSchema: z.ZodType<Prisma.driversUncheckedUpdateManyInput> = z
	.object({
		driver_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		business_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		online: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		on_order: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		ride_requirements: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		user_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		current_vehicle_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		last_used_vehicle_id: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		delivery_timeline: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		last_ping_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		is_inactive: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		transfer_requirements: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		regions: z.union([z.lazy(() => driversUpdateregionsInputSchema), z.string().array()]).optional(),
		handles_taxi_orders: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		handles_transfer_orders: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		handles_delivery_orders: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		taxi_orders_toggled: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		transfer_orders_toggled: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		delivery_orders_toggled: z
			.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		partner_cash_balance: z
			.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		come_to_work_last_sent_at: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default driversUncheckedUpdateManyInputSchema;
