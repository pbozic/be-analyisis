import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema } from './EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const promo_adsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.promo_adsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => promo_adsScalarWhereWithAggregatesInputSchema),z.lazy(() => promo_adsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => promo_adsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => promo_adsScalarWhereWithAggregatesInputSchema),z.lazy(() => promo_adsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  promo_ads_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tag: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  service_type: z.union([ z.lazy(() => EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema),z.lazy(() => PROMO_SERVICE_TYPESSchema) ]).optional(),
  discount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  code: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  active_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  active_until: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default promo_adsScalarWhereWithAggregatesInputSchema;
