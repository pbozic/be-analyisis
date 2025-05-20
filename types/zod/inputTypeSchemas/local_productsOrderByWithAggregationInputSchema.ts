import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { local_productsCountOrderByAggregateInputSchema } from './local_productsCountOrderByAggregateInputSchema';
import { local_productsMaxOrderByAggregateInputSchema } from './local_productsMaxOrderByAggregateInputSchema';
import { local_productsMinOrderByAggregateInputSchema } from './local_productsMinOrderByAggregateInputSchema';

export const local_productsOrderByWithAggregationInputSchema: z.ZodType<Prisma.local_productsOrderByWithAggregationInput> =
	z
		.object({
			local_product_id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			currency: z.lazy(() => SortOrderSchema).optional(),
			stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => local_productsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => local_productsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => local_productsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default local_productsOrderByWithAggregationInputSchema;
