import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_municipalitiesCountOrderByAggregateInputSchema: z.ZodType<Prisma.driver_municipalitiesCountOrderByAggregateInput> =
	z
		.object({
			driver_municipalities_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			municipalities_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default driver_municipalitiesCountOrderByAggregateInputSchema;
