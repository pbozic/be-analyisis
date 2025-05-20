import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_ordersCountOrderByAggregateInputSchema } from './delivery_ordersCountOrderByAggregateInputSchema';
import { delivery_ordersAvgOrderByAggregateInputSchema } from './delivery_ordersAvgOrderByAggregateInputSchema';
import { delivery_ordersMaxOrderByAggregateInputSchema } from './delivery_ordersMaxOrderByAggregateInputSchema';
import { delivery_ordersMinOrderByAggregateInputSchema } from './delivery_ordersMinOrderByAggregateInputSchema';
import { delivery_ordersSumOrderByAggregateInputSchema } from './delivery_ordersSumOrderByAggregateInputSchema';

export const delivery_ordersOrderByWithAggregationInputSchema: z.ZodType<Prisma.delivery_ordersOrderByWithAggregationInput> =
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
			_count: z.lazy(() => delivery_ordersCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => delivery_ordersAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => delivery_ordersMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => delivery_ordersMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => delivery_ordersSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default delivery_ordersOrderByWithAggregationInputSchema;
