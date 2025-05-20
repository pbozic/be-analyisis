import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { flag_historyCountOrderByAggregateInputSchema } from './flag_historyCountOrderByAggregateInputSchema';
import { flag_historyMaxOrderByAggregateInputSchema } from './flag_historyMaxOrderByAggregateInputSchema';
import { flag_historyMinOrderByAggregateInputSchema } from './flag_historyMinOrderByAggregateInputSchema';

export const flag_historyOrderByWithAggregationInputSchema: z.ZodType<Prisma.flag_historyOrderByWithAggregationInput> =
	z
		.object({
			flag_history_id: z.lazy(() => SortOrderSchema).optional(),
			flag_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => flag_historyCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => flag_historyMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => flag_historyMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default flag_historyOrderByWithAggregationInputSchema;
