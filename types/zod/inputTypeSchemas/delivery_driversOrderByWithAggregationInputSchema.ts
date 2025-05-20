import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_driversCountOrderByAggregateInputSchema } from './delivery_driversCountOrderByAggregateInputSchema';
import { delivery_driversAvgOrderByAggregateInputSchema } from './delivery_driversAvgOrderByAggregateInputSchema';
import { delivery_driversMaxOrderByAggregateInputSchema } from './delivery_driversMaxOrderByAggregateInputSchema';
import { delivery_driversMinOrderByAggregateInputSchema } from './delivery_driversMinOrderByAggregateInputSchema';
import { delivery_driversSumOrderByAggregateInputSchema } from './delivery_driversSumOrderByAggregateInputSchema';

export const delivery_driversOrderByWithAggregationInputSchema: z.ZodType<Prisma.delivery_driversOrderByWithAggregationInput> =
	z
		.object({
			delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
			online: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			on_order: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			delivers_daily_meals: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			working_hours: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			delivery_timeline: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			last_ping_at: z.lazy(() => SortOrderSchema).optional(),
			on_daily_meals: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			is_inactive: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			scheduled_meals_route: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			regions: z.lazy(() => SortOrderSchema).optional(),
			partner_cash_balance: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			daily_meal_business_id: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			_count: z.lazy(() => delivery_driversCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => delivery_driversAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => delivery_driversMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => delivery_driversMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => delivery_driversSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default delivery_driversOrderByWithAggregationInputSchema;
