import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const local_productsUncheckedCreateWithoutPricesInputSchema: z.ZodType<Prisma.local_productsUncheckedCreateWithoutPricesInput> = z.object({
  local_product_id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  currency: z.string(),
  stripe_product_id: z.string(),
  business_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default local_productsUncheckedCreateWithoutPricesInputSchema;
