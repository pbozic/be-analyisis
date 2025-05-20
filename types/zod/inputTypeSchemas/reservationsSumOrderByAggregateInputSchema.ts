import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reservationsSumOrderByAggregateInputSchema: z.ZodType<Prisma.reservationsSumOrderByAggregateInput> = z
	.object({
		seats: z.lazy(() => SortOrderSchema).optional(),
		table: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reservationsSumOrderByAggregateInputSchema;
