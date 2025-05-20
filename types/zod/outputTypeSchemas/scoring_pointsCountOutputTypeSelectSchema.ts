import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const scoring_pointsCountOutputTypeSelectSchema: z.ZodType<Prisma.scoring_pointsCountOutputTypeSelect> = z.object({
  late_events: z.boolean().optional(),
}).strict();

export default scoring_pointsCountOutputTypeSelectSchema;
