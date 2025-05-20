import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumSCORING_POINTS_REASONFilterSchema } from './EnumSCORING_POINTS_REASONFilterSchema';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const scoring_pointsScalarWhereInputSchema: z.ZodType<Prisma.scoring_pointsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => scoring_pointsScalarWhereInputSchema),z.lazy(() => scoring_pointsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => scoring_pointsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => scoring_pointsScalarWhereInputSchema),z.lazy(() => scoring_pointsScalarWhereInputSchema).array() ]).optional(),
  scoring_points_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  points: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isPenalty: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  reason: z.union([ z.lazy(() => EnumSCORING_POINTS_REASONFilterSchema),z.lazy(() => SCORING_POINTS_REASONSchema) ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default scoring_pointsScalarWhereInputSchema;
