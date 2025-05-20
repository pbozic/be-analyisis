import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const taxi_ordersMinOrderByAggregateInputSchema: z.ZodType<Prisma.taxi_ordersMinOrderByAggregateInput> = z
	.object({
		order_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		business_users_id: z.lazy(() => SortOrderSchema).optional(),
		business_clients_id: z.lazy(() => SortOrderSchema).optional(),
		driver_id: z.lazy(() => SortOrderSchema).optional(),
		vehicle_id: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		last_sent_at: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		telephone: z.lazy(() => SortOrderSchema).optional(),
		first_name: z.lazy(() => SortOrderSchema).optional(),
		last_name: z.lazy(() => SortOrderSchema).optional(),
		cancellation_reason: z.lazy(() => SortOrderSchema).optional(),
		find_drivers_attempts: z.lazy(() => SortOrderSchema).optional(),
		is_scheduled: z.lazy(() => SortOrderSchema).optional(),
		parent_order_id: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		subtype: z.lazy(() => SortOrderSchema).optional(),
		customer_note: z.lazy(() => SortOrderSchema).optional(),
		parent_user_type: z.lazy(() => SortOrderSchema).optional(),
		creating_user_id: z.lazy(() => SortOrderSchema).optional(),
		allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
		order_number: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default taxi_ordersMinOrderByAggregateInputSchema;
