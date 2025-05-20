import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const promo_bannersCreateManyPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersCreateManyPromo_adsInput> = z.object({
  promo_banners_id: z.string().uuid().optional(),
  type: z.string(),
  size: z.string().optional().nullable(),
  title: z.string(),
  text: z.string(),
  promo_section_buy_id: z.string().optional().nullable(),
  file_id: z.string()
}).strict();

export default promo_bannersCreateManyPromo_adsInputSchema;
