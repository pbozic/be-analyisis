import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const local_pricesCreateManyProductInputSchema: z.ZodType<Prisma.local_pricesCreateManyProductInput> = z
	.object({
		local_prices_id: z.string().uuid().optional(),
		currency: z.string(),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
		tier: z.string().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default local_pricesCreateManyProductInputSchema;
