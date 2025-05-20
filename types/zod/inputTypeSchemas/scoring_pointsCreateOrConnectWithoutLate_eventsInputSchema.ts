import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsCreateWithoutLate_eventsInputSchema } from './scoring_pointsCreateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema';

export const scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema: z.ZodType<Prisma.scoring_pointsCreateOrConnectWithoutLate_eventsInput> = z.object({
  where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema) ]),
}).strict();

export default scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema;
