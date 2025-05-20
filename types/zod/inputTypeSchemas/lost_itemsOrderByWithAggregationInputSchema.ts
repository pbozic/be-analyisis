import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { lost_itemsCountOrderByAggregateInputSchema } from './lost_itemsCountOrderByAggregateInputSchema';
import { lost_itemsMaxOrderByAggregateInputSchema } from './lost_itemsMaxOrderByAggregateInputSchema';
import { lost_itemsMinOrderByAggregateInputSchema } from './lost_itemsMinOrderByAggregateInputSchema';

export const lost_itemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.lost_itemsOrderByWithAggregationInput> = z
	.object({
		lost_item_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		found: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => lost_itemsCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => lost_itemsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => lost_itemsMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default lost_itemsOrderByWithAggregationInputSchema;
