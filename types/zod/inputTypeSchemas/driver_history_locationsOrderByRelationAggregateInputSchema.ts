import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_history_locationsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.driver_history_locationsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default driver_history_locationsOrderByRelationAggregateInputSchema;
