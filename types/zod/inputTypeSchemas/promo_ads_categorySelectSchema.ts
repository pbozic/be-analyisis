import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsArgsSchema } from "../outputTypeSchemas/promo_adsArgsSchema"
import { categoriesArgsSchema } from "../outputTypeSchemas/categoriesArgsSchema"

export const promo_ads_categorySelectSchema: z.ZodType<Prisma.promo_ads_categorySelect> = z.object({
  promo_ads_category_id: z.boolean().optional(),
  promo_ads_id: z.boolean().optional(),
  categories_id: z.boolean().optional(),
  promo_ad: z.union([z.boolean(),z.lazy(() => promo_adsArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
}).strict()

export default promo_ads_categorySelectSchema;
