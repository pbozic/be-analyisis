import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsSelectSchema } from '../inputTypeSchemas/scoring_pointsSelectSchema';
import { scoring_pointsIncludeSchema } from '../inputTypeSchemas/scoring_pointsIncludeSchema';

export const scoring_pointsArgsSchema: z.ZodType<Prisma.scoring_pointsDefaultArgs> = z.object({
  select: z.lazy(() => scoring_pointsSelectSchema).optional(),
  include: z.lazy(() => scoring_pointsIncludeSchema).optional(),
}).strict();

export default scoring_pointsArgsSchema;
