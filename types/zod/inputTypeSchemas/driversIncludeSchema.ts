import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const driversIncludeSchema: z.ZodType<Prisma.driversInclude> = z
	.object({
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

export default driversIncludeSchema;
