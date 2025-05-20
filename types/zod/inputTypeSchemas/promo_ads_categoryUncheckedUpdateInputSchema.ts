import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const promo_ads_categoryUncheckedUpdateInputSchema: z.ZodType<Prisma.promo_ads_categoryUncheckedUpdateInput> = z.object({
  promo_ads_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  promo_ads_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categories_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default promo_ads_categoryUncheckedUpdateInputSchema;
