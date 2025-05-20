import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driversCountOrderByAggregateInputSchema } from './driversCountOrderByAggregateInputSchema';
import { driversAvgOrderByAggregateInputSchema } from './driversAvgOrderByAggregateInputSchema';
import { driversMaxOrderByAggregateInputSchema } from './driversMaxOrderByAggregateInputSchema';
import { driversMinOrderByAggregateInputSchema } from './driversMinOrderByAggregateInputSchema';
import { driversSumOrderByAggregateInputSchema } from './driversSumOrderByAggregateInputSchema';

export const driversOrderByWithAggregationInputSchema: z.ZodType<Prisma.driversOrderByWithAggregationInput> = z
	.object({
		driver_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		online: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		on_order: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		working_hours: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		ride_requirements: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		current_vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		last_used_vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_timeline: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		last_ping_at: z.lazy(() => SortOrderSchema).optional(),
		is_inactive: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		transfer_requirements: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		regions: z.lazy(() => SortOrderSchema).optional(),
		handles_taxi_orders: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		handles_transfer_orders: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		handles_delivery_orders: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		taxi_orders_toggled: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		transfer_orders_toggled: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		delivery_orders_toggled: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		partner_cash_balance: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		come_to_work_last_sent_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		_count: z.lazy(() => driversCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => driversAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => driversMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => driversMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => driversSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default driversOrderByWithAggregationInputSchema;
