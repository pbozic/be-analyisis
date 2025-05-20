import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersIncludeSchema } from '../inputTypeSchemas/delivery_ordersIncludeSchema';
import { delivery_ordersWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateInputSchema } from '../inputTypeSchemas/delivery_ordersCreateInputSchema';
import { delivery_ordersUncheckedCreateInputSchema } from '../inputTypeSchemas/delivery_ordersUncheckedCreateInputSchema';
import { delivery_ordersUpdateInputSchema } from '../inputTypeSchemas/delivery_ordersUpdateInputSchema';
import { delivery_ordersUncheckedUpdateInputSchema } from '../inputTypeSchemas/delivery_ordersUncheckedUpdateInputSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { delivery_order_sentFindManyArgsSchema } from '../outputTypeSchemas/delivery_order_sentFindManyArgsSchema';
import { vehiclesArgsSchema } from '../outputTypeSchemas/vehiclesArgsSchema';
import { delivery_driversArgsSchema } from '../outputTypeSchemas/delivery_driversArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { transactionsFindManyArgsSchema } from '../outputTypeSchemas/transactionsFindManyArgsSchema';
import { wallet_transfer_historyFindManyArgsSchema } from '../outputTypeSchemas/wallet_transfer_historyFindManyArgsSchema';
import { driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/driver_history_locationsFindManyArgsSchema';
import { delivery_driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/delivery_driver_history_locationsFindManyArgsSchema';
import { cashbackFindManyArgsSchema } from '../outputTypeSchemas/cashbackFindManyArgsSchema';
import { order_lobbiesArgsSchema } from '../outputTypeSchemas/order_lobbiesArgsSchema';
import { scoring_pointsFindManyArgsSchema } from '../outputTypeSchemas/scoring_pointsFindManyArgsSchema';
import { late_eventsFindManyArgsSchema } from '../outputTypeSchemas/late_eventsFindManyArgsSchema';
import { Delivery_ordersCountOutputTypeArgsSchema } from '../outputTypeSchemas/Delivery_ordersCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const delivery_ordersSelectSchema: z.ZodType<Prisma.delivery_ordersSelect> = z
	.object({
		order_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		route: z.boolean().optional(),
		pickup_location: z.boolean().optional(),
		delivery_location: z.boolean().optional(),
		payment: z.boolean().optional(),
		estimates: z.boolean().optional(),
		items: z.boolean().optional(),
		details: z.boolean().optional(),
		courier_instructions: z.boolean().optional(),
		restaurant_message: z.boolean().optional(),
		scheduled: z.boolean().optional(),
		timeline: z.boolean().optional(),
		status: z.boolean().optional(),
		last_sent_at: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		vehicle_id: z.boolean().optional(),
		delivery_driver_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		payment_intent_id: z.boolean().optional(),
		find_drivers_attempts: z.boolean().optional(),
		is_daily_meal: z.boolean().optional(),
		flags: z.boolean().optional(),
		allow_credits_usage: z.boolean().optional(),
		order_number: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		history: z.union([z.boolean(), z.lazy(() => delivery_order_sentFindManyArgsSchema)]).optional(),
		vehicle: z.union([z.boolean(), z.lazy(() => vehiclesArgsSchema)]).optional(),
		delivery_driver: z.union([z.boolean(), z.lazy(() => delivery_driversArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		transactions: z.union([z.boolean(), z.lazy(() => transactionsFindManyArgsSchema)]).optional(),
		wallet_transfer: z.union([z.boolean(), z.lazy(() => wallet_transfer_historyFindManyArgsSchema)]).optional(),
		driver_history_locations: z
			.union([z.boolean(), z.lazy(() => driver_history_locationsFindManyArgsSchema)])
			.optional(),
		delivery_driver_history_locations: z
			.union([z.boolean(), z.lazy(() => delivery_driver_history_locationsFindManyArgsSchema)])
			.optional(),
		cashback: z.union([z.boolean(), z.lazy(() => cashbackFindManyArgsSchema)]).optional(),
		order_lobbies: z.union([z.boolean(), z.lazy(() => order_lobbiesArgsSchema)]).optional(),
		scoring_points: z.union([z.boolean(), z.lazy(() => scoring_pointsFindManyArgsSchema)]).optional(),
		late_events: z.union([z.boolean(), z.lazy(() => late_eventsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Delivery_ordersCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const delivery_ordersUpsertArgsSchema: z.ZodType<Prisma.delivery_ordersUpsertArgs> = z
	.object({
		select: delivery_ordersSelectSchema.optional(),
		include: delivery_ordersIncludeSchema.optional(),
		where: delivery_ordersWhereUniqueInputSchema,
		create: z.union([delivery_ordersCreateInputSchema, delivery_ordersUncheckedCreateInputSchema]),
		update: z.union([delivery_ordersUpdateInputSchema, delivery_ordersUncheckedUpdateInputSchema]),
	})
	.strict();

export default delivery_ordersUpsertArgsSchema;
