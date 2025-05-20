import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutScoring_pointsInputSchema } from './late_eventsUpdateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema';

export const late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => late_eventsUpdateWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema;
