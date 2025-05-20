import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsCountOutputTypeSelectSchema } from './scoring_pointsCountOutputTypeSelectSchema';

export const scoring_pointsCountOutputTypeArgsSchema: z.ZodType<Prisma.scoring_pointsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => scoring_pointsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default scoring_pointsCountOutputTypeSelectSchema;
