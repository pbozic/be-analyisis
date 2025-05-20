import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const promo_ads_categoryCreateManyInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateManyInput> = z
	.object({
		promo_ads_category_id: z.string().uuid().optional(),
		promo_ads_id: z.string(),
		categories_id: z.string(),
	})
	.strict();

export default promo_ads_categoryCreateManyInputSchema;
