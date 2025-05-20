import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driversMaxOrderByAggregateInputSchema: z.ZodType<Prisma.driversMaxOrderByAggregateInput> = z
	.object({
		driver_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		online: z.lazy(() => SortOrderSchema).optional(),
		on_order: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		current_vehicle_id: z.lazy(() => SortOrderSchema).optional(),
		last_used_vehicle_id: z.lazy(() => SortOrderSchema).optional(),
		last_ping_at: z.lazy(() => SortOrderSchema).optional(),
		is_inactive: z.lazy(() => SortOrderSchema).optional(),
		handles_taxi_orders: z.lazy(() => SortOrderSchema).optional(),
		handles_transfer_orders: z.lazy(() => SortOrderSchema).optional(),
		handles_delivery_orders: z.lazy(() => SortOrderSchema).optional(),
		taxi_orders_toggled: z.lazy(() => SortOrderSchema).optional(),
		transfer_orders_toggled: z.lazy(() => SortOrderSchema).optional(),
		delivery_orders_toggled: z.lazy(() => SortOrderSchema).optional(),
		partner_cash_balance: z.lazy(() => SortOrderSchema).optional(),
		come_to_work_last_sent_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default driversMaxOrderByAggregateInputSchema;
