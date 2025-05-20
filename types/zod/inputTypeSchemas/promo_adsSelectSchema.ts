import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersFindManyArgsSchema } from "../outputTypeSchemas/promo_bannersFindManyArgsSchema"
import { promo_ads_categoryFindManyArgsSchema } from "../outputTypeSchemas/promo_ads_categoryFindManyArgsSchema"
import { Promo_adsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Promo_adsCountOutputTypeArgsSchema"

export const promo_adsSelectSchema: z.ZodType<Prisma.promo_adsSelect> = z.object({
  promo_ads_id: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  tag: z.boolean().optional(),
  service_type: z.boolean().optional(),
  discount: z.boolean().optional(),
  active: z.boolean().optional(),
  code: z.boolean().optional(),
  created_at: z.boolean().optional(),
  active_at: z.boolean().optional(),
  active_until: z.boolean().optional(),
  banner: z.union([z.boolean(),z.lazy(() => promo_bannersFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => promo_ads_categoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Promo_adsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default promo_adsSelectSchema;
