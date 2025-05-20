import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';

export const delivery_driver_history_locationsOrderByWithRelationInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsOrderByWithRelationInput> =
	z
		.object({
			delivery_driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
			delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
			order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default delivery_driver_history_locationsOrderByWithRelationInputSchema;
