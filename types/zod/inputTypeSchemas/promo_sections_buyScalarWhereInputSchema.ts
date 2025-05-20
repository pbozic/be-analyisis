import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const promo_sections_buyScalarWhereInputSchema: z.ZodType<Prisma.promo_sections_buyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => promo_sections_buyScalarWhereInputSchema),z.lazy(() => promo_sections_buyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => promo_sections_buyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => promo_sections_buyScalarWhereInputSchema),z.lazy(() => promo_sections_buyScalarWhereInputSchema).array() ]).optional(),
  promo_sections_buy_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  promo_sections_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  stripe_subscription_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  active_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tier: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default promo_sections_buyScalarWhereInputSchema;
