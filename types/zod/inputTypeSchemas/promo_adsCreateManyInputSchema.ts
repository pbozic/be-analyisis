import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const promo_adsCreateManyInputSchema: z.ZodType<Prisma.promo_adsCreateManyInput> = z.object({
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
  active_until: z.coerce.date().optional().nullable()
}).strict();

export default promo_adsCreateManyInputSchema;
