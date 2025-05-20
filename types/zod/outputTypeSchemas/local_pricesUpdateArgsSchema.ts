import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesIncludeSchema } from '../inputTypeSchemas/local_pricesIncludeSchema'
import { local_pricesUpdateInputSchema } from '../inputTypeSchemas/local_pricesUpdateInputSchema'
import { local_pricesUncheckedUpdateInputSchema } from '../inputTypeSchemas/local_pricesUncheckedUpdateInputSchema'
import { local_pricesWhereUniqueInputSchema } from '../inputTypeSchemas/local_pricesWhereUniqueInputSchema'
import { local_productsArgsSchema } from "../outputTypeSchemas/local_productsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const local_pricesUpdateArgsSchema: z.ZodType<Prisma.local_pricesUpdateArgs> = z.object({
  select: local_pricesSelectSchema.optional(),
  include: local_pricesIncludeSchema.optional(),
  data: z.union([ local_pricesUpdateInputSchema,local_pricesUncheckedUpdateInputSchema ]),
  where: local_pricesWhereUniqueInputSchema,
}).strict() ;

export default local_pricesUpdateArgsSchema;
