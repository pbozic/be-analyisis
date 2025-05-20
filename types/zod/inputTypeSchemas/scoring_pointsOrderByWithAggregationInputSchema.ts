import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { scoring_pointsCountOrderByAggregateInputSchema } from './scoring_pointsCountOrderByAggregateInputSchema';
import { scoring_pointsAvgOrderByAggregateInputSchema } from './scoring_pointsAvgOrderByAggregateInputSchema';
import { scoring_pointsMaxOrderByAggregateInputSchema } from './scoring_pointsMaxOrderByAggregateInputSchema';
import { scoring_pointsMinOrderByAggregateInputSchema } from './scoring_pointsMinOrderByAggregateInputSchema';
import { scoring_pointsSumOrderByAggregateInputSchema } from './scoring_pointsSumOrderByAggregateInputSchema';

export const scoring_pointsOrderByWithAggregationInputSchema: z.ZodType<Prisma.scoring_pointsOrderByWithAggregationInput> =
	z
		.object({
			scoring_points_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			delivery_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			taxi_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			points: z.lazy(() => SortOrderSchema).optional(),
			isPenalty: z.lazy(() => SortOrderSchema).optional(),
			reason: z.lazy(() => SortOrderSchema).optional(),
			expiration_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => scoring_pointsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => scoring_pointsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => scoring_pointsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => scoring_pointsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => scoring_pointsSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default scoring_pointsOrderByWithAggregationInputSchema;
