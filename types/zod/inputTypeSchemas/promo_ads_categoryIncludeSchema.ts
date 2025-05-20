import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsArgsSchema } from '../outputTypeSchemas/promo_adsArgsSchema';
import { categoriesArgsSchema } from '../outputTypeSchemas/categoriesArgsSchema';

export const promo_ads_categoryIncludeSchema: z.ZodType<Prisma.promo_ads_categoryInclude> = z
	.object({
		promo_ad: z.union([z.boolean(), z.lazy(() => promo_adsArgsSchema)]).optional(),
		category: z.union([z.boolean(), z.lazy(() => categoriesArgsSchema)]).optional(),
	})
	.strict();

export default promo_ads_categoryIncludeSchema;
