import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersFindManyArgsSchema } from "../outputTypeSchemas/promo_bannersFindManyArgsSchema"
import { promo_ads_categoryFindManyArgsSchema } from "../outputTypeSchemas/promo_ads_categoryFindManyArgsSchema"
import { Promo_adsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Promo_adsCountOutputTypeArgsSchema"

export const promo_adsIncludeSchema: z.ZodType<Prisma.promo_adsInclude> = z.object({
  banner: z.union([z.boolean(),z.lazy(() => promo_bannersFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => promo_ads_categoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Promo_adsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default promo_adsIncludeSchema;
