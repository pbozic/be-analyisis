import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateNestedOneWithoutPromo_bannersInputSchema } from './filesCreateNestedOneWithoutPromo_bannersInputSchema';
import { promo_adsCreateNestedOneWithoutBannerInputSchema } from './promo_adsCreateNestedOneWithoutBannerInputSchema';

export const promo_bannersCreateInputSchema: z.ZodType<Prisma.promo_bannersCreateInput> = z.object({
  promo_banners_id: z.string().uuid().optional(),
  type: z.string(),
  size: z.string().optional().nullable(),
  title: z.string(),
  text: z.string(),
  promo_section_buy_id: z.string().optional().nullable(),
  files: z.lazy(() => filesCreateNestedOneWithoutPromo_bannersInputSchema),
  promo_ads: z.lazy(() => promo_adsCreateNestedOneWithoutBannerInputSchema).optional()
}).strict();

export default promo_bannersCreateInputSchema;
