import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { local_productsOrderByWithRelationInputSchema } from './local_productsOrderByWithRelationInputSchema';

export const local_pricesOrderByWithRelationInputSchema: z.ZodType<Prisma.local_pricesOrderByWithRelationInput> = z
	.object({
		local_prices_id: z.lazy(() => SortOrderSchema).optional(),
		local_product_id: z.lazy(() => SortOrderSchema).optional(),
		currency: z.lazy(() => SortOrderSchema).optional(),
		stripe_price_id: z.lazy(() => SortOrderSchema).optional(),
		stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
		tier: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		product: z.lazy(() => local_productsOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default local_pricesOrderByWithRelationInputSchema;
