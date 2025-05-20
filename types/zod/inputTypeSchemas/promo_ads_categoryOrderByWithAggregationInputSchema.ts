import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { promo_ads_categoryCountOrderByAggregateInputSchema } from './promo_ads_categoryCountOrderByAggregateInputSchema';
import { promo_ads_categoryMaxOrderByAggregateInputSchema } from './promo_ads_categoryMaxOrderByAggregateInputSchema';
import { promo_ads_categoryMinOrderByAggregateInputSchema } from './promo_ads_categoryMinOrderByAggregateInputSchema';

export const promo_ads_categoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.promo_ads_categoryOrderByWithAggregationInput> =
	z
		.object({
			promo_ads_category_id: z.lazy(() => SortOrderSchema).optional(),
			promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
			categories_id: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => promo_ads_categoryCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => promo_ads_categoryMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => promo_ads_categoryMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default promo_ads_categoryOrderByWithAggregationInputSchema;
