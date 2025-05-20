import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsCreateNestedOneWithoutPricesInputSchema } from './local_productsCreateNestedOneWithoutPricesInputSchema';

export const local_pricesCreateInputSchema: z.ZodType<Prisma.local_pricesCreateInput> = z
	.object({
		local_prices_id: z.string().uuid().optional(),
		currency: z.string(),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
		tier: z.string().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		product: z.lazy(() => local_productsCreateNestedOneWithoutPricesInputSchema),
	})
	.strict();

export default local_pricesCreateInputSchema;
