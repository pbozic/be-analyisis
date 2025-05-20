import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const promo_sectionsCreateManyInputSchema: z.ZodType<Prisma.promo_sectionsCreateManyInput> = z.object({
  promo_sections_id: z.string().uuid().optional(),
  name: z.string(),
  tag: z.string(),
  active: z.boolean().optional(),
  description: z.string().optional().nullable(),
  prices: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  limits: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  stripe_product_id: z.string().optional().nullable(),
  canPurchase: z.boolean(),
  t1price: z.number().int().optional().nullable(),
  t2price: z.number().int().optional().nullable(),
  t3price: z.number().int().optional().nullable(),
  order: z.number().int().optional(),
  service_type: z.lazy(() => PROMO_SERVICE_TYPESSchema),
  promo_duration_days: z.number().int().optional(),
  translatable_id: z.string(),
  display_cards_per_page: z.number().int().optional().nullable()
}).strict();

export default promo_sectionsCreateManyInputSchema;
