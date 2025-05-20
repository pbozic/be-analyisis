import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { vehiclesFindManyArgsSchema } from '../outputTypeSchemas/vehiclesFindManyArgsSchema';
import { delivery_ordersFindManyArgsSchema } from '../outputTypeSchemas/delivery_ordersFindManyArgsSchema';
import { delivery_order_sentFindManyArgsSchema } from '../outputTypeSchemas/delivery_order_sentFindManyArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { delivery_driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/delivery_driver_history_locationsFindManyArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { Delivery_driversCountOutputTypeArgsSchema } from '../outputTypeSchemas/Delivery_driversCountOutputTypeArgsSchema';

export const delivery_driversIncludeSchema: z.ZodType<Prisma.delivery_driversInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		vehicles: z.union([z.boolean(), z.lazy(() => vehiclesFindManyArgsSchema)]).optional(),
		orders: z.union([z.boolean(), z.lazy(() => delivery_ordersFindManyArgsSchema)]).optional(),
		received_orders: z.union([z.boolean(), z.lazy(() => delivery_order_sentFindManyArgsSchema)]).optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		delivery_driver_history_locations: z
			.union([z.boolean(), z.lazy(() => delivery_driver_history_locationsFindManyArgsSchema)])
			.optional(),
		daily_meal_business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Delivery_driversCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default delivery_driversIncludeSchema;
