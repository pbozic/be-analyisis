import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Vehicle_driversListRelationFilterSchema } from './Vehicle_driversListRelationFilterSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';
import { Taxi_order_sentListRelationFilterSchema } from './Taxi_order_sentListRelationFilterSchema';
import { Delivery_ordersListRelationFilterSchema } from './Delivery_ordersListRelationFilterSchema';
import { Delivery_order_sentListRelationFilterSchema } from './Delivery_order_sentListRelationFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { Driver_history_locationsListRelationFilterSchema } from './Driver_history_locationsListRelationFilterSchema';
import { Driver_municipalitiesListRelationFilterSchema } from './Driver_municipalitiesListRelationFilterSchema';
import { VehiclesNullableRelationFilterSchema } from './VehiclesNullableRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { Driver_activity_logsListRelationFilterSchema } from './Driver_activity_logsListRelationFilterSchema';

export const driversWhereInputSchema: z.ZodType<Prisma.driversWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => driversWhereInputSchema), z.lazy(() => driversWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => driversWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => driversWhereInputSchema), z.lazy(() => driversWhereInputSchema).array()]).optional(),
		driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		business_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		online: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		on_order: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		working_hours: z.lazy(() => JsonNullableFilterSchema).optional(),
		ride_requirements: z.lazy(() => JsonNullableFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		user_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		current_vehicle_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		last_used_vehicle_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		location: z.lazy(() => JsonNullableFilterSchema).optional(),
		delivery_timeline: z.lazy(() => JsonNullableFilterSchema).optional(),
		last_ping_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		is_inactive: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		transfer_requirements: z.lazy(() => JsonNullableFilterSchema).optional(),
		regions: z.lazy(() => StringNullableListFilterSchema).optional(),
		handles_taxi_orders: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		handles_transfer_orders: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		handles_delivery_orders: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		taxi_orders_toggled: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		transfer_orders_toggled: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		delivery_orders_toggled: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		partner_cash_balance: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		come_to_work_last_sent_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		user: z
			.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
			.optional()
			.nullable(),
		vehicles: z.lazy(() => Vehicle_driversListRelationFilterSchema).optional(),
		orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
		received_orders: z.lazy(() => Taxi_order_sentListRelationFilterSchema).optional(),
		delivery_orders: z.lazy(() => Delivery_ordersListRelationFilterSchema).optional(),
		received_delivery_orders: z.lazy(() => Delivery_order_sentListRelationFilterSchema).optional(),
		documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
		driver_history_locations: z.lazy(() => Driver_history_locationsListRelationFilterSchema).optional(),
		driver_municipalities: z.lazy(() => Driver_municipalitiesListRelationFilterSchema).optional(),
		current_vehicle: z
			.union([z.lazy(() => VehiclesNullableRelationFilterSchema), z.lazy(() => vehiclesWhereInputSchema)])
			.optional()
			.nullable(),
		activity_logs: z.lazy(() => Driver_activity_logsListRelationFilterSchema).optional(),
	})
	.strict();

export default driversWhereInputSchema;
