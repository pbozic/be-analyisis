import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_driver_history_locationsCountOrderByAggregateInputSchema } from './delivery_driver_history_locationsCountOrderByAggregateInputSchema';
import { delivery_driver_history_locationsMaxOrderByAggregateInputSchema } from './delivery_driver_history_locationsMaxOrderByAggregateInputSchema';
import { delivery_driver_history_locationsMinOrderByAggregateInputSchema } from './delivery_driver_history_locationsMinOrderByAggregateInputSchema';

export const delivery_driver_history_locationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsOrderByWithAggregationInput> =
	z
		.object({
			delivery_driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
			delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => delivery_driver_history_locationsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => delivery_driver_history_locationsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => delivery_driver_history_locationsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default delivery_driver_history_locationsOrderByWithAggregationInputSchema;
