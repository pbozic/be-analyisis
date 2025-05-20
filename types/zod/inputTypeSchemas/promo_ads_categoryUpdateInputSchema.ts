import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema';
import { categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema } from './categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema';

export const promo_ads_categoryUpdateInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateInput> = z.object({
  promo_ads_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  promo_ad: z.lazy(() => promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  category: z.lazy(() => categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema).optional()
}).strict();

export default promo_ads_categoryUpdateInputSchema;
