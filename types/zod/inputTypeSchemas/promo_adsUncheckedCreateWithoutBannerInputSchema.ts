import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';
import { promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInputSchema';

export const promo_adsUncheckedCreateWithoutBannerInputSchema: z.ZodType<Prisma.promo_adsUncheckedCreateWithoutBannerInput> = z.object({
  promo_ads_id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  tag: z.string(),
  service_type: z.lazy(() => PROMO_SERVICE_TYPESSchema),
  discount: z.number().optional(),
  active: z.boolean().optional(),
  code: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  active_at: z.coerce.date().optional().nullable(),
  active_until: z.coerce.date().optional().nullable(),
  categories: z.lazy(() => promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInputSchema).optional()
}).strict();

export default promo_adsUncheckedCreateWithoutBannerInputSchema;
