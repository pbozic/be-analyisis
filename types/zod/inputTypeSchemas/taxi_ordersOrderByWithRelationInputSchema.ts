import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { business_usersOrderByWithRelationInputSchema } from './business_usersOrderByWithRelationInputSchema';
import { business_clientsOrderByWithRelationInputSchema } from './business_clientsOrderByWithRelationInputSchema';
import { taxi_order_sentOrderByRelationAggregateInputSchema } from './taxi_order_sentOrderByRelationAggregateInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';
import { driver_history_locationsOrderByRelationAggregateInputSchema } from './driver_history_locationsOrderByRelationAggregateInputSchema';
import { wallet_transfer_historyOrderByRelationAggregateInputSchema } from './wallet_transfer_historyOrderByRelationAggregateInputSchema';
import { transactionsOrderByRelationAggregateInputSchema } from './transactionsOrderByRelationAggregateInputSchema';
import { cashbackOrderByRelationAggregateInputSchema } from './cashbackOrderByRelationAggregateInputSchema';
import { scoring_pointsOrderByRelationAggregateInputSchema } from './scoring_pointsOrderByRelationAggregateInputSchema';
import { late_eventsOrderByRelationAggregateInputSchema } from './late_eventsOrderByRelationAggregateInputSchema';

export const taxi_ordersOrderByWithRelationInputSchema: z.ZodType<Prisma.taxi_ordersOrderByWithRelationInput> = z
	.object({
		order_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		business_users_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_clients_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		route: z.lazy(() => SortOrderSchema).optional(),
		pickup_location: z.lazy(() => SortOrderSchema).optional(),
		delivery_location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		payment: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		estimates: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		timeline: z.lazy(() => SortOrderSchema).optional(),
		preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		last_sent_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		telephone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		first_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		last_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		cancellation_reason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		find_drivers_attempts: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		is_scheduled: z.lazy(() => SortOrderSchema).optional(),
		parent_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		subtype: z.lazy(() => SortOrderSchema).optional(),
		flags: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		cargo_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		customer_note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		parent_user_type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		creating_user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
		order_number: z.lazy(() => SortOrderSchema).optional(),
		business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
		driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
		vehicle: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional(),
		user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		business_users: z.lazy(() => business_usersOrderByWithRelationInputSchema).optional(),
		business_clients: z.lazy(() => business_clientsOrderByWithRelationInputSchema).optional(),
		history: z.lazy(() => taxi_order_sentOrderByRelationAggregateInputSchema).optional(),
		parent_order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
		grouped_orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional(),
		driver_history_locations: z.lazy(() => driver_history_locationsOrderByRelationAggregateInputSchema).optional(),
		wallet_transfer: z.lazy(() => wallet_transfer_historyOrderByRelationAggregateInputSchema).optional(),
		transactions: z.lazy(() => transactionsOrderByRelationAggregateInputSchema).optional(),
		cashback: z.lazy(() => cashbackOrderByRelationAggregateInputSchema).optional(),
		scoring_points: z.lazy(() => scoring_pointsOrderByRelationAggregateInputSchema).optional(),
		late_events: z.lazy(() => late_eventsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default taxi_ordersOrderByWithRelationInputSchema;
