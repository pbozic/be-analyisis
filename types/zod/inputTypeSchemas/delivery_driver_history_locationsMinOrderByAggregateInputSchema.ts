import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_driver_history_locationsMinOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsMinOrderByAggregateInput> =
	z
		.object({
			delivery_driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
			delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default delivery_driver_history_locationsMinOrderByAggregateInputSchema;
