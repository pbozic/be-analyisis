import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { promo_adsOrderByWithRelationInputSchema } from './promo_adsOrderByWithRelationInputSchema';
import { categoriesOrderByWithRelationInputSchema } from './categoriesOrderByWithRelationInputSchema';

export const promo_ads_categoryOrderByWithRelationInputSchema: z.ZodType<Prisma.promo_ads_categoryOrderByWithRelationInput> = z.object({
  promo_ads_category_id: z.lazy(() => SortOrderSchema).optional(),
  promo_ads_id: z.lazy(() => SortOrderSchema).optional(),
  categories_id: z.lazy(() => SortOrderSchema).optional(),
  promo_ad: z.lazy(() => promo_adsOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => categoriesOrderByWithRelationInputSchema).optional()
}).strict();

export default promo_ads_categoryOrderByWithRelationInputSchema;
