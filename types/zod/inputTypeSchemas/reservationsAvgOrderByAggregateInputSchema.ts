import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reservationsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.reservationsAvgOrderByAggregateInput> = z
	.object({
		seats: z.lazy(() => SortOrderSchema).optional(),
		table: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reservationsAvgOrderByAggregateInputSchema;
