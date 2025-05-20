import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { driversCreateregionsInputSchema } from './driversCreateregionsInputSchema';
import { usersCreateNestedOneWithoutDriverInputSchema } from './usersCreateNestedOneWithoutDriverInputSchema';
import { vehicle_driversCreateNestedManyWithoutDriverInputSchema } from './vehicle_driversCreateNestedManyWithoutDriverInputSchema';
import { taxi_ordersCreateNestedManyWithoutDriverInputSchema } from './taxi_ordersCreateNestedManyWithoutDriverInputSchema';
import { taxi_order_sentCreateNestedManyWithoutDriverInputSchema } from './taxi_order_sentCreateNestedManyWithoutDriverInputSchema';
import { delivery_order_sentCreateNestedManyWithoutDriverInputSchema } from './delivery_order_sentCreateNestedManyWithoutDriverInputSchema';
import { documentsCreateNestedManyWithoutDriversInputSchema } from './documentsCreateNestedManyWithoutDriversInputSchema';
import { driver_history_locationsCreateNestedManyWithoutDriverInputSchema } from './driver_history_locationsCreateNestedManyWithoutDriverInputSchema';
import { driver_municipalitiesCreateNestedManyWithoutDriversInputSchema } from './driver_municipalitiesCreateNestedManyWithoutDriversInputSchema';
import { vehiclesCreateNestedOneWithoutCurrent_driverInputSchema } from './vehiclesCreateNestedOneWithoutCurrent_driverInputSchema';
import { driver_activity_logsCreateNestedManyWithoutDriverInputSchema } from './driver_activity_logsCreateNestedManyWithoutDriverInputSchema';

export const driversCreateWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.driversCreateWithoutDelivery_ordersInput> =
	z
		.object({
			driver_id: z.string().uuid().optional(),
			business_id: z.string().optional().nullable(),
			online: z.boolean().optional().nullable(),
			on_order: z.boolean().optional().nullable(),
			working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			ride_requirements: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			last_used_vehicle_id: z.string().optional().nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			delivery_timeline: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			last_ping_at: z.coerce.date().optional(),
			is_inactive: z.boolean().optional().nullable(),
			transfer_requirements: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			regions: z.union([z.lazy(() => driversCreateregionsInputSchema), z.string().array()]).optional(),
			handles_taxi_orders: z.boolean().optional().nullable(),
			handles_transfer_orders: z.boolean().optional().nullable(),
			handles_delivery_orders: z.boolean().optional().nullable(),
			taxi_orders_toggled: z.boolean().optional().nullable(),
			transfer_orders_toggled: z.boolean().optional().nullable(),
			delivery_orders_toggled: z.boolean().optional().nullable(),
			partner_cash_balance: z.number().optional().nullable(),
			come_to_work_last_sent_at: z.coerce.date().optional().nullable(),
			user: z.lazy(() => usersCreateNestedOneWithoutDriverInputSchema).optional(),
			vehicles: z.lazy(() => vehicle_driversCreateNestedManyWithoutDriverInputSchema).optional(),
			orders: z.lazy(() => taxi_ordersCreateNestedManyWithoutDriverInputSchema).optional(),
			received_orders: z.lazy(() => taxi_order_sentCreateNestedManyWithoutDriverInputSchema).optional(),
			received_delivery_orders: z
				.lazy(() => delivery_order_sentCreateNestedManyWithoutDriverInputSchema)
				.optional(),
			documents: z.lazy(() => documentsCreateNestedManyWithoutDriversInputSchema).optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsCreateNestedManyWithoutDriverInputSchema)
				.optional(),
			driver_municipalities: z
				.lazy(() => driver_municipalitiesCreateNestedManyWithoutDriversInputSchema)
				.optional(),
			current_vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutCurrent_driverInputSchema).optional(),
			activity_logs: z.lazy(() => driver_activity_logsCreateNestedManyWithoutDriverInputSchema).optional(),
		})
		.strict();

export default driversCreateWithoutDelivery_ordersInputSchema;
