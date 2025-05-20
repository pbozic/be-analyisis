import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const scoring_pointsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.scoring_pointsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default scoring_pointsOrderByRelationAggregateInputSchema;
