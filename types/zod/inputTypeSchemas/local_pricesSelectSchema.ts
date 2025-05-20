import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsArgsSchema } from "../outputTypeSchemas/local_productsArgsSchema"

export const local_pricesSelectSchema: z.ZodType<Prisma.local_pricesSelect> = z.object({
  local_prices_id: z.boolean().optional(),
  local_product_id: z.boolean().optional(),
  currency: z.boolean().optional(),
  stripe_price_id: z.boolean().optional(),
  stripe_product_id: z.boolean().optional(),
  tier: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => local_productsArgsSchema)]).optional(),
}).strict()

export default local_pricesSelectSchema;
