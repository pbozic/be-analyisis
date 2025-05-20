import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { delivery_order_sentOrderByRelationAggregateInputSchema } from './delivery_order_sentOrderByRelationAggregateInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { transactionsOrderByRelationAggregateInputSchema } from './transactionsOrderByRelationAggregateInputSchema';
import { wallet_transfer_historyOrderByRelationAggregateInputSchema } from './wallet_transfer_historyOrderByRelationAggregateInputSchema';
import { driver_history_locationsOrderByRelationAggregateInputSchema } from './driver_history_locationsOrderByRelationAggregateInputSchema';
import { delivery_driver_history_locationsOrderByRelationAggregateInputSchema } from './delivery_driver_history_locationsOrderByRelationAggregateInputSchema';
import { cashbackOrderByRelationAggregateInputSchema } from './cashbackOrderByRelationAggregateInputSchema';
import { order_lobbiesOrderByWithRelationInputSchema } from './order_lobbiesOrderByWithRelationInputSchema';
import { scoring_pointsOrderByRelationAggregateInputSchema } from './scoring_pointsOrderByRelationAggregateInputSchema';
import { late_eventsOrderByRelationAggregateInputSchema } from './late_eventsOrderByRelationAggregateInputSchema';

export const delivery_ordersOrderByWithRelationInputSchema: z.ZodType<Prisma.delivery_ordersOrderByWithRelationInput> =
	z
		.object({
			order_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			route: z.lazy(() => SortOrderSchema).optional(),
			pickup_location: z.lazy(() => SortOrderSchema).optional(),
			delivery_location: z.lazy(() => SortOrderSchema).optional(),
			payment: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			estimates: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			items: z.lazy(() => SortOrderSchema).optional(),
			details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			courier_instructions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			restaurant_message: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			scheduled: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			timeline: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			last_sent_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			delivery_driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			payment_intent_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			find_drivers_attempts: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			is_daily_meal: z.lazy(() => SortOrderSchema).optional(),
			flags: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
			order_number: z.lazy(() => SortOrderSchema).optional(),
			user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
			history: z.lazy(() => delivery_order_sentOrderByRelationAggregateInputSchema).optional(),
			vehicle: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional(),
			delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
			driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
			business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
			transactions: z.lazy(() => transactionsOrderByRelationAggregateInputSchema).optional(),
			wallet_transfer: z.lazy(() => wallet_transfer_historyOrderByRelationAggregateInputSchema).optional(),
			driver_history_locations: z
				.lazy(() => driver_history_locationsOrderByRelationAggregateInputSchema)
				.optional(),
			delivery_driver_history_locations: z
				.lazy(() => delivery_driver_history_locationsOrderByRelationAggregateInputSchema)
				.optional(),
			cashback: z.lazy(() => cashbackOrderByRelationAggregateInputSchema).optional(),
			order_lobbies: z.lazy(() => order_lobbiesOrderByWithRelationInputSchema).optional(),
			scoring_points: z.lazy(() => scoring_pointsOrderByRelationAggregateInputSchema).optional(),
			late_events: z.lazy(() => late_eventsOrderByRelationAggregateInputSchema).optional(),
		})
		.strict();

export default delivery_ordersOrderByWithRelationInputSchema;
