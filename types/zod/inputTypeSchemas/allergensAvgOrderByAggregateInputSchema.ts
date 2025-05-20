import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allergensAvgOrderByAggregateInputSchema: z.ZodType<Prisma.allergensAvgOrderByAggregateInput> = z
	.object({
		code: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default allergensAvgOrderByAggregateInputSchema;
