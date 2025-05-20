import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';

export const NestedEnumSCORING_POINTS_REASONFilterSchema: z.ZodType<Prisma.NestedEnumSCORING_POINTS_REASONFilter> = z.object({
  equals: z.lazy(() => SCORING_POINTS_REASONSchema).optional(),
  in: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  notIn: z.lazy(() => SCORING_POINTS_REASONSchema).array().optional(),
  not: z.union([ z.lazy(() => SCORING_POINTS_REASONSchema),z.lazy(() => NestedEnumSCORING_POINTS_REASONFilterSchema) ]).optional(),
}).strict();

export default NestedEnumSCORING_POINTS_REASONFilterSchema;
