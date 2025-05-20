import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const local_pricesCountOrderByAggregateInputSchema: z.ZodType<Prisma.local_pricesCountOrderByAggregateInput> = z
	.object({
		local_prices_id: z.lazy(() => SortOrderSchema).optional(),
		local_product_id: z.lazy(() => SortOrderSchema).optional(),
		currency: z.lazy(() => SortOrderSchema).optional(),
		stripe_price_id: z.lazy(() => SortOrderSchema).optional(),
		stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
		tier: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default local_pricesCountOrderByAggregateInputSchema;
