import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_activity_logsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.driver_activity_logsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default driver_activity_logsOrderByRelationAggregateInputSchema;
