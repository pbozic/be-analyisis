import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereInputSchema } from './promo_ads_categoryWhereInputSchema';

export const Promo_ads_categoryListRelationFilterSchema: z.ZodType<Prisma.Promo_ads_categoryListRelationFilter> = z
	.object({
		every: z.lazy(() => promo_ads_categoryWhereInputSchema).optional(),
		some: z.lazy(() => promo_ads_categoryWhereInputSchema).optional(),
		none: z.lazy(() => promo_ads_categoryWhereInputSchema).optional(),
	})
	.strict();

export default Promo_ads_categoryListRelationFilterSchema;
