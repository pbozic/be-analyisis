import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { NestedEnumSCORING_POINTS_REASONFilterSchema } from './NestedEnumSCORING_POINTS_REASONFilterSchema';

export const EnumSCORING_POINTS_REASONFilterSchema: z.ZodType<Prisma.EnumSCORING_POINTS_REASONFilter> = z.object({
  equals: z.lazy(() => SCORING_POINTS_REASONSchema).optional(),
  in: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  notIn: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  not: z.union([ z.lazy(() => SCORING_POINTS_REASONSchema),z.lazy(() => NestedEnumSCORING_POINTS_REASONFilterSchema) ]).optional(),
}).strict();

export default EnumSCORING_POINTS_REASONFilterSchema;
