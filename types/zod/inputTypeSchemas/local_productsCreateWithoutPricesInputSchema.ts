import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutWord_buy_stripe_productInputSchema } from './businessCreateNestedOneWithoutWord_buy_stripe_productInputSchema';

export const local_productsCreateWithoutPricesInputSchema: z.ZodType<Prisma.local_productsCreateWithoutPricesInput> = z.object({
  local_product_id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  currency: z.string(),
  stripe_product_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  business: z.lazy(() => businessCreateNestedOneWithoutWord_buy_stripe_productInputSchema)
}).strict();

export default local_productsCreateWithoutPricesInputSchema;
