import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesIncludeSchema } from '../inputTypeSchemas/local_pricesIncludeSchema'
import { local_pricesWhereInputSchema } from '../inputTypeSchemas/local_pricesWhereInputSchema'
import { local_pricesOrderByWithRelationInputSchema } from '../inputTypeSchemas/local_pricesOrderByWithRelationInputSchema'
import { local_pricesWhereUniqueInputSchema } from '../inputTypeSchemas/local_pricesWhereUniqueInputSchema'
import { Local_pricesScalarFieldEnumSchema } from '../inputTypeSchemas/Local_pricesScalarFieldEnumSchema'
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

export const local_pricesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.local_pricesFindFirstOrThrowArgs> = z.object({
  select: local_pricesSelectSchema.optional(),
  include: local_pricesIncludeSchema.optional(),
  where: local_pricesWhereInputSchema.optional(),
  orderBy: z.union([ local_pricesOrderByWithRelationInputSchema.array(),local_pricesOrderByWithRelationInputSchema ]).optional(),
  cursor: local_pricesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Local_pricesScalarFieldEnumSchema,Local_pricesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default local_pricesFindFirstOrThrowArgsSchema;
