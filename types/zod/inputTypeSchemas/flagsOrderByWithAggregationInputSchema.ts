import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { flagsCountOrderByAggregateInputSchema } from './flagsCountOrderByAggregateInputSchema';
import { flagsMaxOrderByAggregateInputSchema } from './flagsMaxOrderByAggregateInputSchema';
import { flagsMinOrderByAggregateInputSchema } from './flagsMinOrderByAggregateInputSchema';

export const flagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.flagsOrderByWithAggregationInput> = z
	.object({
		flag_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => flagsCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => flagsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => flagsMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default flagsOrderByWithAggregationInputSchema;
