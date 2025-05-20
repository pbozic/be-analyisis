import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const promo_ads_categoryCreateManyPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateManyPromo_adInput> = z.object({
  promo_ads_category_id: z.string().uuid().optional(),
  categories_id: z.string()
}).strict();

export default promo_ads_categoryCreateManyPromo_adInputSchema;
