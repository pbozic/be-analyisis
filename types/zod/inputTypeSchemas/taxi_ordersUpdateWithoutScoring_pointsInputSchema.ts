import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema } from './EnumTAXI_ORDER_STATUSFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { EnumORDER_TYPEFieldUpdateOperationsInputSchema } from './EnumORDER_TYPEFieldUpdateOperationsInputSchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema } from './EnumORDER_SUBTYPEFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { businessUpdateOneWithoutTaxi_ordersNestedInputSchema } from './businessUpdateOneWithoutTaxi_ordersNestedInputSchema';
import { driversUpdateOneWithoutOrdersNestedInputSchema } from './driversUpdateOneWithoutOrdersNestedInputSchema';
import { vehiclesUpdateOneWithoutTaxi_ordersNestedInputSchema } from './vehiclesUpdateOneWithoutTaxi_ordersNestedInputSchema';
import { usersUpdateOneWithoutOrdersNestedInputSchema } from './usersUpdateOneWithoutOrdersNestedInputSchema';
import { business_usersUpdateOneWithoutTaxi_ordersNestedInputSchema } from './business_usersUpdateOneWithoutTaxi_ordersNestedInputSchema';
import { business_clientsUpdateOneWithoutTaxi_ordersNestedInputSchema } from './business_clientsUpdateOneWithoutTaxi_ordersNestedInputSchema';
import { taxi_order_sentUpdateManyWithoutOrderNestedInputSchema } from './taxi_order_sentUpdateManyWithoutOrderNestedInputSchema';
import { taxi_ordersUpdateOneWithoutGrouped_ordersNestedInputSchema } from './taxi_ordersUpdateOneWithoutGrouped_ordersNestedInputSchema';
import { taxi_ordersUpdateManyWithoutParent_orderNestedInputSchema } from './taxi_ordersUpdateManyWithoutParent_orderNestedInputSchema';
import { driver_history_locationsUpdateManyWithoutOrderNestedInputSchema } from './driver_history_locationsUpdateManyWithoutOrderNestedInputSchema';
import { wallet_transfer_historyUpdateManyWithoutTaxi_orderNestedInputSchema } from './wallet_transfer_historyUpdateManyWithoutTaxi_orderNestedInputSchema';
import { transactionsUpdateManyWithoutTaxi_orderNestedInputSchema } from './transactionsUpdateManyWithoutTaxi_orderNestedInputSchema';
import { cashbackUpdateManyWithoutTaxi_orderNestedInputSchema } from './cashbackUpdateManyWithoutTaxi_orderNestedInputSchema';
import { late_eventsUpdateManyWithoutTaxi_ordersNestedInputSchema } from './late_eventsUpdateManyWithoutTaxi_ordersNestedInputSchema';

export const taxi_ordersUpdateWithoutScoring_pointsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithoutScoring_pointsInput> =
	z
		.object({
			order_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
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
			business: z.lazy(() => businessUpdateOneWithoutTaxi_ordersNestedInputSchema).optional(),
			driver: z.lazy(() => driversUpdateOneWithoutOrdersNestedInputSchema).optional(),
			vehicle: z.lazy(() => vehiclesUpdateOneWithoutTaxi_ordersNestedInputSchema).optional(),
			user: z.lazy(() => usersUpdateOneWithoutOrdersNestedInputSchema).optional(),
			business_users: z.lazy(() => business_usersUpdateOneWithoutTaxi_ordersNestedInputSchema).optional(),
			business_clients: z.lazy(() => business_clientsUpdateOneWithoutTaxi_ordersNestedInputSchema).optional(),
			history: z.lazy(() => taxi_order_sentUpdateManyWithoutOrderNestedInputSchema).optional(),
			parent_order: z.lazy(() => taxi_ordersUpdateOneWithoutGrouped_ordersNestedInputSchema).optional(),
			grouped_orders: z.lazy(() => taxi_ordersUpdateManyWithoutParent_orderNestedInputSchema).optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsUpdateManyWithoutOrderNestedInputSchema)
				.optional(),
			wallet_transfer: z
				.lazy(() => wallet_transfer_historyUpdateManyWithoutTaxi_orderNestedInputSchema)
				.optional(),
			transactions: z.lazy(() => transactionsUpdateManyWithoutTaxi_orderNestedInputSchema).optional(),
			cashback: z.lazy(() => cashbackUpdateManyWithoutTaxi_orderNestedInputSchema).optional(),
			late_events: z.lazy(() => late_eventsUpdateManyWithoutTaxi_ordersNestedInputSchema).optional(),
		})
		.strict();

export default taxi_ordersUpdateWithoutScoring_pointsInputSchema;
