import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const settlementsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.settlementsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default settlementsOrderByRelationAggregateInputSchema;
