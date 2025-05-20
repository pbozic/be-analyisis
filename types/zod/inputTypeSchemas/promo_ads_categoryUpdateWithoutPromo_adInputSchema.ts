import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema } from './categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema';

export const promo_ads_categoryUpdateWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateWithoutPromo_adInput> = z.object({
  promo_ads_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema).optional()
}).strict();

export default promo_ads_categoryUpdateWithoutPromo_adInputSchema;
