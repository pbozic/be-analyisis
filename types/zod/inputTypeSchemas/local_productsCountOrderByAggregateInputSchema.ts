import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const local_productsCountOrderByAggregateInputSchema: z.ZodType<Prisma.local_productsCountOrderByAggregateInput> =
	z
		.object({
			local_product_id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			currency: z.lazy(() => SortOrderSchema).optional(),
			stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default local_productsCountOrderByAggregateInputSchema;
