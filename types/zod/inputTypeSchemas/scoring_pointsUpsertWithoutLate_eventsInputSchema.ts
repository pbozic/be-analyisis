import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUpdateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema';
import { scoring_pointsCreateWithoutLate_eventsInputSchema } from './scoring_pointsCreateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';

export const scoring_pointsUpsertWithoutLate_eventsInputSchema: z.ZodType<Prisma.scoring_pointsUpsertWithoutLate_eventsInput> = z.object({
  update: z.union([ z.lazy(() => scoring_pointsUpdateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema) ]),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema) ]),
  where: z.lazy(() => scoring_pointsWhereInputSchema).optional()
}).strict();

export default scoring_pointsUpsertWithoutLate_eventsInputSchema;
