import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const vehicle_driversMinOrderByAggregateInputSchema: z.ZodType<Prisma.vehicle_driversMinOrderByAggregateInput> =
	z
		.object({
			vehicle_drivers_id: z.lazy(() => SortOrderSchema).optional(),
			vehicle_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			can_drive: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default vehicle_driversMinOrderByAggregateInputSchema;
