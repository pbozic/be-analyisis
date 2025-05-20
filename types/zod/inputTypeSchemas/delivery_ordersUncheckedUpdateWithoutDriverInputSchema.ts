import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema } from './EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { delivery_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema } from './delivery_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema';
import { transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema } from './transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema';
import { wallet_transfer_historyUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema } from './wallet_transfer_historyUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema';
import { driver_history_locationsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema } from './driver_history_locationsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema';
import { delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema } from './delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema';
import { cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema } from './cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema';
import { order_lobbiesUncheckedUpdateOneWithoutDelivery_ordersNestedInputSchema } from './order_lobbiesUncheckedUpdateOneWithoutDelivery_ordersNestedInputSchema';
import { scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema } from './scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema';
import { late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema } from './late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema';

export const delivery_ordersUncheckedUpdateWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedUpdateWithoutDriverInput> =
	z
		.object({
			order_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			user_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			route: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			pickup_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			delivery_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			payment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			estimates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			items: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			details: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			courier_instructions: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			restaurant_message: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			scheduled: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			status: z
				.union([
					z.lazy(() => DELIVERY_ORDER_STATUSSchema),
					z.lazy(() => EnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema),
				])
				.optional(),
			last_sent_at: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			vehicle_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			delivery_driver_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			business_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			payment_intent_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			find_drivers_attempts: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			is_daily_meal: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			flags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			allow_credits_usage: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			order_number: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			history: z.lazy(() => delivery_order_sentUncheckedUpdateManyWithoutOrderNestedInputSchema).optional(),
			transactions: z
				.lazy(() => transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema)
				.optional(),
			wallet_transfer: z
				.lazy(() => wallet_transfer_historyUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema)
				.optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema)
				.optional(),
			delivery_driver_history_locations: z
				.lazy(() => delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema)
				.optional(),
			cashback: z.lazy(() => cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema).optional(),
			order_lobbies: z
				.lazy(() => order_lobbiesUncheckedUpdateOneWithoutDelivery_ordersNestedInputSchema)
				.optional(),
			scoring_points: z
				.lazy(() => scoring_pointsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedUpdateManyWithoutDelivery_ordersNestedInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUncheckedUpdateWithoutDriverInputSchema;
