import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const businessOrderByRelationAggregateInputSchema: z.ZodType<Prisma.businessOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default businessOrderByRelationAggregateInputSchema;
