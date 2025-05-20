import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { NestedEnumSCORING_POINTS_REASONWithAggregatesFilterSchema } from './NestedEnumSCORING_POINTS_REASONWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSCORING_POINTS_REASONFilterSchema } from './NestedEnumSCORING_POINTS_REASONFilterSchema';

export const EnumSCORING_POINTS_REASONWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSCORING_POINTS_REASONWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SCORING_POINTS_REASONSchema).optional(),
  in: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  notIn: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  not: z.union([ z.lazy(() => SCORING_POINTS_REASONSchema),z.lazy(() => NestedEnumSCORING_POINTS_REASONWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSCORING_POINTS_REASONFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSCORING_POINTS_REASONFilterSchema).optional()
}).strict();

export default EnumSCORING_POINTS_REASONWithAggregatesFilterSchema;
