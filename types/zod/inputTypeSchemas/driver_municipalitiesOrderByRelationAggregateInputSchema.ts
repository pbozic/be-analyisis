import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_municipalitiesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.driver_municipalitiesOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default driver_municipalitiesOrderByRelationAggregateInputSchema;
