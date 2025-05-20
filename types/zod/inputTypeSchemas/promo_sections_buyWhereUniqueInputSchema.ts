import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereInputSchema } from './promo_sections_buyWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { Promo_sectionsRelationFilterSchema } from './Promo_sectionsRelationFilterSchema';
import { promo_sectionsWhereInputSchema } from './promo_sectionsWhereInputSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const promo_sections_buyWhereUniqueInputSchema: z.ZodType<Prisma.promo_sections_buyWhereUniqueInput> = z.object({
  promo_sections_buy_id: z.string().uuid()
})
.and(z.object({
  promo_sections_buy_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => promo_sections_buyWhereInputSchema),z.lazy(() => promo_sections_buyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => promo_sections_buyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => promo_sections_buyWhereInputSchema),z.lazy(() => promo_sections_buyWhereInputSchema).array() ]).optional(),
  promo_sections_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  stripe_subscription_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  active_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tier: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  promo_section: z.union([ z.lazy(() => Promo_sectionsRelationFilterSchema),z.lazy(() => promo_sectionsWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional(),
  bought_by: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
}).strict());

export default promo_sections_buyWhereUniqueInputSchema;
