import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const vehiclesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.vehiclesMaxOrderByAggregateInput> = z
	.object({
		vehicle_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		class: z.lazy(() => SortOrderSchema).optional(),
		category: z.lazy(() => SortOrderSchema).optional(),
		make: z.lazy(() => SortOrderSchema).optional(),
		model: z.lazy(() => SortOrderSchema).optional(),
		color: z.lazy(() => SortOrderSchema).optional(),
		license_plate: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
		vehicle_specification_id: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default vehiclesMaxOrderByAggregateInputSchema;
