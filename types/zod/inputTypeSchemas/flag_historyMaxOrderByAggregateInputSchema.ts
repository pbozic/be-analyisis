import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const flag_historyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.flag_historyMaxOrderByAggregateInput> = z
	.object({
		flag_history_id: z.lazy(() => SortOrderSchema).optional(),
		flag_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default flag_historyMaxOrderByAggregateInputSchema;
