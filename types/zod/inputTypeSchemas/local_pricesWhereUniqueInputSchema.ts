import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesWhereInputSchema } from './local_pricesWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Local_productsRelationFilterSchema } from './Local_productsRelationFilterSchema';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';

export const local_pricesWhereUniqueInputSchema: z.ZodType<Prisma.local_pricesWhereUniqueInput> = z.union([
  z.object({
    local_prices_id: z.string().uuid(),
    stripe_price_id: z.string()
  }),
  z.object({
    local_prices_id: z.string().uuid(),
  }),
  z.object({
    stripe_price_id: z.string(),
  }),
])
.and(z.object({
  local_prices_id: z.string().uuid().optional(),
  stripe_price_id: z.string().optional(),
  AND: z.union([ z.lazy(() => local_pricesWhereInputSchema),z.lazy(() => local_pricesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => local_pricesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => local_pricesWhereInputSchema),z.lazy(() => local_pricesWhereInputSchema).array() ]).optional(),
  local_product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stripe_product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tier: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => Local_productsRelationFilterSchema),z.lazy(() => local_productsWhereInputSchema) ]).optional(),
}).strict());

export default local_pricesWhereUniqueInputSchema;
