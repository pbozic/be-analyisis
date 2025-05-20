import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const reservationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.reservationsCountOrderByAggregateInput> = z
	.object({
		reservation_id: z.lazy(() => SortOrderSchema).optional(),
		seats: z.lazy(() => SortOrderSchema).optional(),
		date: z.lazy(() => SortOrderSchema).optional(),
		time: z.lazy(() => SortOrderSchema).optional(),
		datetime: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		table: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default reservationsCountOrderByAggregateInputSchema;
