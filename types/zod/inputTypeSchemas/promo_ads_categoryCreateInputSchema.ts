import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateNestedOneWithoutCategoriesInputSchema } from './promo_adsCreateNestedOneWithoutCategoriesInputSchema';
import { categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema } from './categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema';

export const promo_ads_categoryCreateInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateInput> = z.object({
  promo_ads_category_id: z.string().uuid().optional(),
  promo_ad: z.lazy(() => promo_adsCreateNestedOneWithoutCategoriesInputSchema),
  category: z.lazy(() => categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema)
}).strict();

export default promo_ads_categoryCreateInputSchema;
