import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversIncludeSchema } from '../inputTypeSchemas/delivery_driversIncludeSchema';
import { delivery_driversCreateInputSchema } from '../inputTypeSchemas/delivery_driversCreateInputSchema';
import { delivery_driversUncheckedCreateInputSchema } from '../inputTypeSchemas/delivery_driversUncheckedCreateInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { vehiclesFindManyArgsSchema } from '../outputTypeSchemas/vehiclesFindManyArgsSchema';
import { delivery_ordersFindManyArgsSchema } from '../outputTypeSchemas/delivery_ordersFindManyArgsSchema';
import { delivery_order_sentFindManyArgsSchema } from '../outputTypeSchemas/delivery_order_sentFindManyArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { delivery_driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/delivery_driver_history_locationsFindManyArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { Delivery_driversCountOutputTypeArgsSchema } from '../outputTypeSchemas/Delivery_driversCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const delivery_driversSelectSchema: z.ZodType<Prisma.delivery_driversSelect> = z
	.object({
		delivery_driver_id: z.boolean().optional(),
		online: z.boolean().optional(),
		on_order: z.boolean().optional(),
		delivers_daily_meals: z.boolean().optional(),
		working_hours: z.boolean().optional(),
		business_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		user_id: z.boolean().optional(),
		location: z.boolean().optional(),
		delivery_timeline: z.boolean().optional(),
		last_ping_at: z.boolean().optional(),
		on_daily_meals: z.boolean().optional(),
		is_inactive: z.boolean().optional(),
		scheduled_meals_route: z.boolean().optional(),
		regions: z.boolean().optional(),
		partner_cash_balance: z.boolean().optional(),
		daily_meal_business_id: z.boolean().optional(),
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

export const delivery_driversCreateArgsSchema: z.ZodType<Prisma.delivery_driversCreateArgs> = z
	.object({
		select: delivery_driversSelectSchema.optional(),
		include: delivery_driversIncludeSchema.optional(),
		data: z.union([delivery_driversCreateInputSchema, delivery_driversUncheckedCreateInputSchema]).optional(),
	})
	.strict();

export default delivery_driversCreateArgsSchema;
