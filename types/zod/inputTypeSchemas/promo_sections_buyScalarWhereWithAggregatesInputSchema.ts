import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const promo_sections_buyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.promo_sections_buyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => promo_sections_buyScalarWhereWithAggregatesInputSchema),z.lazy(() => promo_sections_buyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => promo_sections_buyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => promo_sections_buyScalarWhereWithAggregatesInputSchema),z.lazy(() => promo_sections_buyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  promo_sections_buy_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  promo_sections_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  stripe_subscription_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  active_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  tier: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default promo_sections_buyScalarWhereWithAggregatesInputSchema;
