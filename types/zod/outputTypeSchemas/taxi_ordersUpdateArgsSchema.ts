import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersIncludeSchema } from '../inputTypeSchemas/taxi_ordersIncludeSchema';
import { taxi_ordersUpdateInputSchema } from '../inputTypeSchemas/taxi_ordersUpdateInputSchema';
import { taxi_ordersUncheckedUpdateInputSchema } from '../inputTypeSchemas/taxi_ordersUncheckedUpdateInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from '../inputTypeSchemas/taxi_ordersWhereUniqueInputSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { vehiclesArgsSchema } from '../outputTypeSchemas/vehiclesArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { business_usersArgsSchema } from '../outputTypeSchemas/business_usersArgsSchema';
import { business_clientsArgsSchema } from '../outputTypeSchemas/business_clientsArgsSchema';
import { taxi_order_sentFindManyArgsSchema } from '../outputTypeSchemas/taxi_order_sentFindManyArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { driver_history_locationsFindManyArgsSchema } from '../outputTypeSchemas/driver_history_locationsFindManyArgsSchema';
import { wallet_transfer_historyFindManyArgsSchema } from '../outputTypeSchemas/wallet_transfer_historyFindManyArgsSchema';
import { transactionsFindManyArgsSchema } from '../outputTypeSchemas/transactionsFindManyArgsSchema';
import { cashbackFindManyArgsSchema } from '../outputTypeSchemas/cashbackFindManyArgsSchema';
import { scoring_pointsFindManyArgsSchema } from '../outputTypeSchemas/scoring_pointsFindManyArgsSchema';
import { late_eventsFindManyArgsSchema } from '../outputTypeSchemas/late_eventsFindManyArgsSchema';
import { Taxi_ordersCountOutputTypeArgsSchema } from '../outputTypeSchemas/Taxi_ordersCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const taxi_ordersSelectSchema: z.ZodType<Prisma.taxi_ordersSelect> = z
	.object({
		order_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		business_users_id: z.boolean().optional(),
		business_clients_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		vehicle_id: z.boolean().optional(),
		route: z.boolean().optional(),
		pickup_location: z.boolean().optional(),
		delivery_location: z.boolean().optional(),
		payment: z.boolean().optional(),
		estimates: z.boolean().optional(),
		timeline: z.boolean().optional(),
		preferences: z.boolean().optional(),
		status: z.boolean().optional(),
		last_sent_at: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		business_id: z.boolean().optional(),
		telephone: z.boolean().optional(),
		first_name: z.boolean().optional(),
		last_name: z.boolean().optional(),
		cancellation_reason: z.boolean().optional(),
		find_drivers_attempts: z.boolean().optional(),
		is_scheduled: z.boolean().optional(),
		parent_order_id: z.boolean().optional(),
		type: z.boolean().optional(),
		subtype: z.boolean().optional(),
		flags: z.boolean().optional(),
		cargo_preferences: z.boolean().optional(),
		customer_note: z.boolean().optional(),
		parent_user_type: z.boolean().optional(),
		creating_user_id: z.boolean().optional(),
		allow_credits_usage: z.boolean().optional(),
		order_number: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		vehicle: z.union([z.boolean(), z.lazy(() => vehiclesArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		business_users: z.union([z.boolean(), z.lazy(() => business_usersArgsSchema)]).optional(),
		business_clients: z.union([z.boolean(), z.lazy(() => business_clientsArgsSchema)]).optional(),
		history: z.union([z.boolean(), z.lazy(() => taxi_order_sentFindManyArgsSchema)]).optional(),
		parent_order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		grouped_orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		driver_history_locations: z
			.union([z.boolean(), z.lazy(() => driver_history_locationsFindManyArgsSchema)])
			.optional(),
		wallet_transfer: z.union([z.boolean(), z.lazy(() => wallet_transfer_historyFindManyArgsSchema)]).optional(),
		transactions: z.union([z.boolean(), z.lazy(() => transactionsFindManyArgsSchema)]).optional(),
		cashback: z.union([z.boolean(), z.lazy(() => cashbackFindManyArgsSchema)]).optional(),
		scoring_points: z.union([z.boolean(), z.lazy(() => scoring_pointsFindManyArgsSchema)]).optional(),
		late_events: z.union([z.boolean(), z.lazy(() => late_eventsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Taxi_ordersCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const taxi_ordersUpdateArgsSchema: z.ZodType<Prisma.taxi_ordersUpdateArgs> = z
	.object({
		select: taxi_ordersSelectSchema.optional(),
		include: taxi_ordersIncludeSchema.optional(),
		data: z.union([taxi_ordersUpdateInputSchema, taxi_ordersUncheckedUpdateInputSchema]),
		where: taxi_ordersWhereUniqueInputSchema,
	})
	.strict();

export default taxi_ordersUpdateArgsSchema;
