import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema } from './EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { EnumORDER_TYPEFieldUpdateOperationsInputSchema } from './EnumORDER_TYPEFieldUpdateOperationsInputSchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema } from './EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { taxi_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema } from './taxi_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutParent_orderNestedInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutParent_orderNestedInputSchema';
import { driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema } from './driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema';
import { wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema } from './wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema';
import { transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema } from './transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema';
import { cashbackUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema } from './cashbackUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema';
import { late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema } from './late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema';

export const taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedUpdateWithoutParent_orderInput> =
	z
		.object({
			order_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			business_users_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			business_clients_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			driver_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			vehicle_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			route: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			pickup_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			delivery_location: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			payment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			estimates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			preferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			status: z
				.union([
					z.lazy(() => TAXI_ORDER_STATUSSchema),
					z.lazy(() => EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema),
				])
				.optional(),
			last_sent_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			business_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			telephone: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			first_name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			last_name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			cancellation_reason: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			find_drivers_attempts: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			is_scheduled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			type: z
				.union([z.lazy(() => ORDER_TYPESchema), z.lazy(() => EnumORDER_TYPEFieldUpdateOperationsInputSchema)])
				.optional(),
			subtype: z
				.union([
					z.lazy(() => ORDER_SUBTYPESchema),
					z.lazy(() => EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			flags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			cargo_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			customer_note: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			parent_user_type: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			creating_user_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			allow_credits_usage: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			order_number: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			history: z.lazy(() => taxi_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema).optional(),
			grouped_orders: z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutParent_orderNestedInputSchema).optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema)
				.optional(),
			wallet_transfer: z
				.lazy(() => wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema)
				.optional(),
			transactions: z.lazy(() => transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema).optional(),
			cashback: z.lazy(() => cashbackUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema).optional(),
			scoring_points: z
				.lazy(() => scoring_pointsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedUpdateManyWithoutTaxi_ordersNestedInputSchema).optional(),
		})
		.strict();

export default taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema;
