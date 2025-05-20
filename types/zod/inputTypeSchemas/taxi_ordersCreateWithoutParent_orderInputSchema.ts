import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { businessCreateNestedOneWithoutTaxi_ordersInputSchema } from './businessCreateNestedOneWithoutTaxi_ordersInputSchema';
import { driversCreateNestedOneWithoutOrdersInputSchema } from './driversCreateNestedOneWithoutOrdersInputSchema';
import { vehiclesCreateNestedOneWithoutTaxi_ordersInputSchema } from './vehiclesCreateNestedOneWithoutTaxi_ordersInputSchema';
import { usersCreateNestedOneWithoutOrdersInputSchema } from './usersCreateNestedOneWithoutOrdersInputSchema';
import { business_usersCreateNestedOneWithoutTaxi_ordersInputSchema } from './business_usersCreateNestedOneWithoutTaxi_ordersInputSchema';
import { business_clientsCreateNestedOneWithoutTaxi_ordersInputSchema } from './business_clientsCreateNestedOneWithoutTaxi_ordersInputSchema';
import { taxi_order_sentCreateNestedManyWithoutOrderInputSchema } from './taxi_order_sentCreateNestedManyWithoutOrderInputSchema';
import { taxi_ordersCreateNestedManyWithoutParent_orderInputSchema } from './taxi_ordersCreateNestedManyWithoutParent_orderInputSchema';
import { driver_history_locationsCreateNestedManyWithoutOrderInputSchema } from './driver_history_locationsCreateNestedManyWithoutOrderInputSchema';
import { wallet_transfer_historyCreateNestedManyWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateNestedManyWithoutTaxi_orderInputSchema';
import { transactionsCreateNestedManyWithoutTaxi_orderInputSchema } from './transactionsCreateNestedManyWithoutTaxi_orderInputSchema';
import { cashbackCreateNestedManyWithoutTaxi_orderInputSchema } from './cashbackCreateNestedManyWithoutTaxi_orderInputSchema';
import { scoring_pointsCreateNestedManyWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateNestedManyWithoutTaxi_ordersInputSchema';
import { late_eventsCreateNestedManyWithoutTaxi_ordersInputSchema } from './late_eventsCreateNestedManyWithoutTaxi_ordersInputSchema';

export const taxi_ordersCreateWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersCreateWithoutParent_orderInput> =
	z
		.object({
			order_id: z.string().uuid().optional(),
			route: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			pickup_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			delivery_location: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			payment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			estimates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			preferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			status: z.lazy(() => TAXI_ORDER_STATUSSchema),
			last_sent_at: z.coerce.date().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			telephone: z.string().optional().nullable(),
			first_name: z.string().optional().nullable(),
			last_name: z.string().optional().nullable(),
			cancellation_reason: z.string().optional().nullable(),
			find_drivers_attempts: z.number().int().optional().nullable(),
			is_scheduled: z.boolean().optional(),
			type: z.lazy(() => ORDER_TYPESchema).optional(),
			subtype: z.lazy(() => ORDER_SUBTYPESchema).optional(),
			flags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			cargo_preferences: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			customer_note: z.string().optional().nullable(),
			parent_user_type: z.string().optional().nullable(),
			creating_user_id: z.string().optional().nullable(),
			allow_credits_usage: z.boolean().optional(),
			order_number: z.number().int().optional(),
			business: z.lazy(() => businessCreateNestedOneWithoutTaxi_ordersInputSchema).optional(),
			driver: z.lazy(() => driversCreateNestedOneWithoutOrdersInputSchema).optional(),
			vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutTaxi_ordersInputSchema).optional(),
			user: z.lazy(() => usersCreateNestedOneWithoutOrdersInputSchema).optional(),
			business_users: z.lazy(() => business_usersCreateNestedOneWithoutTaxi_ordersInputSchema).optional(),
			business_clients: z.lazy(() => business_clientsCreateNestedOneWithoutTaxi_ordersInputSchema).optional(),
			history: z.lazy(() => taxi_order_sentCreateNestedManyWithoutOrderInputSchema).optional(),
			grouped_orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutParent_orderInputSchema).optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsCreateNestedManyWithoutOrderInputSchema)
				.optional(),
			wallet_transfer: z
				.lazy(() => wallet_transfer_historyCreateNestedManyWithoutTaxi_orderInputSchema)
				.optional(),
			transactions: z.lazy(() => transactionsCreateNestedManyWithoutTaxi_orderInputSchema).optional(),
			cashback: z.lazy(() => cashbackCreateNestedManyWithoutTaxi_orderInputSchema).optional(),
			scoring_points: z.lazy(() => scoring_pointsCreateNestedManyWithoutTaxi_ordersInputSchema).optional(),
			late_events: z.lazy(() => late_eventsCreateNestedManyWithoutTaxi_ordersInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateWithoutParent_orderInputSchema;
