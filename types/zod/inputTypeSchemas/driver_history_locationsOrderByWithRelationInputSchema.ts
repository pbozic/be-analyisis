import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';

export const driver_history_locationsOrderByWithRelationInputSchema: z.ZodType<Prisma.driver_history_locationsOrderByWithRelationInput> =
	z
		.object({
			driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			taxi_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			delivery_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
			order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
			delivery_order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default driver_history_locationsOrderByWithRelationInputSchema;
