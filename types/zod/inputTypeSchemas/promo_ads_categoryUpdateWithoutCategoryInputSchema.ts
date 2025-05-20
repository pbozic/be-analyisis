import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema';

export const promo_ads_categoryUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateWithoutCategoryInput> = z.object({
  promo_ads_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  promo_ad: z.lazy(() => promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict();

export default promo_ads_categoryUpdateWithoutCategoryInputSchema;
