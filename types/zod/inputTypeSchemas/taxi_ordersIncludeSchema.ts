import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const taxi_ordersIncludeSchema: z.ZodType<Prisma.taxi_ordersInclude> = z
	.object({
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

export default taxi_ordersIncludeSchema;
