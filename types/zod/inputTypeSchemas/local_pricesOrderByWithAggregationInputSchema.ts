import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { local_pricesCountOrderByAggregateInputSchema } from './local_pricesCountOrderByAggregateInputSchema';
import { local_pricesMaxOrderByAggregateInputSchema } from './local_pricesMaxOrderByAggregateInputSchema';
import { local_pricesMinOrderByAggregateInputSchema } from './local_pricesMinOrderByAggregateInputSchema';

export const local_pricesOrderByWithAggregationInputSchema: z.ZodType<Prisma.local_pricesOrderByWithAggregationInput> =
	z
		.object({
			local_prices_id: z.lazy(() => SortOrderSchema).optional(),
			local_product_id: z.lazy(() => SortOrderSchema).optional(),
			currency: z.lazy(() => SortOrderSchema).optional(),
			stripe_price_id: z.lazy(() => SortOrderSchema).optional(),
			stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
			tier: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => local_pricesCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => local_pricesMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => local_pricesMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default local_pricesOrderByWithAggregationInputSchema;
