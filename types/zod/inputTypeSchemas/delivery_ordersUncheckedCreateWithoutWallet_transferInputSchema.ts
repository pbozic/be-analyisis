import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { delivery_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema } from './delivery_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema';
import { transactionsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema } from './transactionsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema';
import { driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema } from './driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema';
import { delivery_driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema';
import { cashbackUncheckedCreateNestedManyWithoutDelivery_orderInputSchema } from './cashbackUncheckedCreateNestedManyWithoutDelivery_orderInputSchema';
import { order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInputSchema';
import { scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema } from './scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema';
import { late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema } from './late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema';

export const delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedCreateWithoutWallet_transferInput> =
	z
		.object({
			order_id: z.string().uuid().optional(),
			user_id: z.string().optional().nullable(),
			route: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			pickup_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			delivery_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			payment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			estimates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			items: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			details: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			courier_instructions: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			restaurant_message: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			scheduled: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			status: z.lazy(() => DELIVERY_ORDER_STATUSSchema),
			last_sent_at: z.coerce.date().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			vehicle_id: z.string().optional().nullable(),
			delivery_driver_id: z.string().optional().nullable(),
			driver_id: z.string().optional().nullable(),
			business_id: z.string().optional().nullable(),
			payment_intent_id: z.string().optional().nullable(),
			find_drivers_attempts: z.number().int().optional().nullable(),
			is_daily_meal: z.boolean().optional(),
			flags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			allow_credits_usage: z.boolean().optional(),
			order_number: z.number().int().optional(),
			history: z.lazy(() => delivery_order_sentUncheckedCreateNestedManyWithoutOrderInputSchema).optional(),
			transactions: z
				.lazy(() => transactionsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema)
				.optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema)
				.optional(),
			delivery_driver_history_locations: z
				.lazy(() => delivery_driver_history_locationsUncheckedCreateNestedManyWithoutOrderInputSchema)
				.optional(),
			cashback: z.lazy(() => cashbackUncheckedCreateNestedManyWithoutDelivery_orderInputSchema).optional(),
			order_lobbies: z
				.lazy(() => order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInputSchema)
				.optional(),
			scoring_points: z
				.lazy(() => scoring_pointsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema)
				.optional(),
			late_events: z.lazy(() => late_eventsUncheckedCreateNestedManyWithoutDelivery_ordersInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema;
