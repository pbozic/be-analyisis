import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const promo_ads_categoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.promo_ads_categoryMaxOrderByAggregateInput> =
	z
		.object({
			promo_ads_category_id: z.lazy(() => SortOrderSchema).optional(),
			promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
			categories_id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default promo_ads_categoryMaxOrderByAggregateInputSchema;
