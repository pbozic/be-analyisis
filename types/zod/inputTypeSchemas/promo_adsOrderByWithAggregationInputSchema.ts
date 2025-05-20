import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { promo_adsCountOrderByAggregateInputSchema } from './promo_adsCountOrderByAggregateInputSchema';
import { promo_adsAvgOrderByAggregateInputSchema } from './promo_adsAvgOrderByAggregateInputSchema';
import { promo_adsMaxOrderByAggregateInputSchema } from './promo_adsMaxOrderByAggregateInputSchema';
import { promo_adsMinOrderByAggregateInputSchema } from './promo_adsMinOrderByAggregateInputSchema';
import { promo_adsSumOrderByAggregateInputSchema } from './promo_adsSumOrderByAggregateInputSchema';

export const promo_adsOrderByWithAggregationInputSchema: z.ZodType<Prisma.promo_adsOrderByWithAggregationInput> = z
	.object({
		promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		tag: z.lazy(() => SortOrderSchema).optional(),
		service_type: z.lazy(() => SortOrderSchema).optional(),
		discount: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		code: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		active_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		active_until: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => promo_adsCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => promo_adsAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => promo_adsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => promo_adsMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => promo_adsSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default promo_adsOrderByWithAggregationInputSchema;
