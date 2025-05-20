import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesUncheckedCreateNestedManyWithoutProductInputSchema } from './local_pricesUncheckedCreateNestedManyWithoutProductInputSchema';

export const local_productsUncheckedCreateInputSchema: z.ZodType<Prisma.local_productsUncheckedCreateInput> = z.object({
  local_product_id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  currency: z.string(),
  stripe_product_id: z.string(),
  business_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  prices: z.lazy(() => local_pricesUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default local_productsUncheckedCreateInputSchema;
