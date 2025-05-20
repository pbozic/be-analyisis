import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema } from './categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema';

export const promo_ads_categoryCreateWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateWithoutPromo_adInput> =
	z
		.object({
			promo_ads_category_id: z.string().uuid().optional(),
			category: z.lazy(() => categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema),
		})
		.strict();

export default promo_ads_categoryCreateWithoutPromo_adInputSchema;
