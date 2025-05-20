import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesCreateNestedManyWithoutProductInputSchema } from './local_pricesCreateNestedManyWithoutProductInputSchema';

export const local_productsCreateWithoutBusinessInputSchema: z.ZodType<Prisma.local_productsCreateWithoutBusinessInput> =
	z
		.object({
			local_product_id: z.string().uuid().optional(),
			name: z.string(),
			description: z.string().optional().nullable(),
			currency: z.string(),
			stripe_product_id: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			prices: z.lazy(() => local_pricesCreateNestedManyWithoutProductInputSchema).optional(),
		})
		.strict();

export default local_productsCreateWithoutBusinessInputSchema;
