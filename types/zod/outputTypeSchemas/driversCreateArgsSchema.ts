import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversIncludeSchema } from '../inputTypeSchemas/driversIncludeSchema';
import { driversCreateInputSchema } from '../inputTypeSchemas/driversCreateInputSchema';
import { driversUncheckedCreateInputSchema } from '../inputTypeSchemas/driversUncheckedCreateInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { vehicle_driversFindManyArgsSchema } from '../outputTypeSchemas/vehicle_driversFindManyArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { taxi_order_sentFindManyArgsSchema } from '../outputTypeSchemas/taxi_order_sentFindManyArgsSchema';
import { delivery_ordersFindManyArgsSchema } from '../outputTypeSchemas/delivery_ordersFindManyArgsSchema';
import { delivery_order_sentFindManyArgsSchema } from '../outputTypeSchemas/delivery_order_sentFindManyArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/driver_history_locationsFindManyArgsSchema';
import { driver_municipalitiesFindManyArgsSchema } from '../outputTypeSchemas/driver_municipalitiesFindManyArgsSchema';
import { vehiclesArgsSchema } from '../outputTypeSchemas/vehiclesArgsSchema';
import { driver_activity_logsFindManyArgsSchema } from '../outputTypeSchemas/driver_activity_logsFindManyArgsSchema';
import { DriversCountOutputTypeArgsSchema } from '../outputTypeSchemas/DriversCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driversSelectSchema: z.ZodType<Prisma.driversSelect> = z
	.object({
		driver_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		online: z.boolean().optional(),
		on_order: z.boolean().optional(),
		working_hours: z.boolean().optional(),
		ride_requirements: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		user_id: z.boolean().optional(),
		current_vehicle_id: z.boolean().optional(),
		last_used_vehicle_id: z.boolean().optional(),
		location: z.boolean().optional(),
		delivery_timeline: z.boolean().optional(),
		last_ping_at: z.boolean().optional(),
		is_inactive: z.boolean().optional(),
		transfer_requirements: z.boolean().optional(),
		regions: z.boolean().optional(),
		handles_taxi_orders: z.boolean().optional(),
		handles_transfer_orders: z.boolean().optional(),
		handles_delivery_orders: z.boolean().optional(),
		taxi_orders_toggled: z.boolean().optional(),
		transfer_orders_toggled: z.boolean().optional(),
		delivery_orders_toggled: z.boolean().optional(),
		partner_cash_balance: z.boolean().optional(),
		come_to_work_last_sent_at: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		vehicles: z.union([z.boolean(), z.lazy(() => vehicle_driversFindManyArgsSchema)]).optional(),
		orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		received_orders: z.union([z.boolean(), z.lazy(() => taxi_order_sentFindManyArgsSchema)]).optional(),
		delivery_orders: z.union([z.boolean(), z.lazy(() => delivery_ordersFindManyArgsSchema)]).optional(),
		received_delivery_orders: z
			.union([z.boolean(), z.lazy(() => delivery_order_sentFindManyArgsSchema)])
			.optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		driver_history_locations: z
			.union([z.boolean(), z.lazy(() => driver_history_locationsFindManyArgsSchema)])
			.optional(),
		driver_municipalities: z.union([z.boolean(), z.lazy(() => driver_municipalitiesFindManyArgsSchema)]).optional(),
		current_vehicle: z.union([z.boolean(), z.lazy(() => vehiclesArgsSchema)]).optional(),
		activity_logs: z.union([z.boolean(), z.lazy(() => driver_activity_logsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => DriversCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const driversCreateArgsSchema: z.ZodType<Prisma.driversCreateArgs> = z
	.object({
		select: driversSelectSchema.optional(),
		include: driversIncludeSchema.optional(),
		data: z.union([driversCreateInputSchema, driversUncheckedCreateInputSchema]).optional(),
	})
	.strict();

export default driversCreateArgsSchema;
