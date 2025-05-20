import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutScoring_pointsInputSchema } from './late_eventsUpdateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema';
import { late_eventsCreateWithoutScoring_pointsInputSchema } from './late_eventsCreateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedCreateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedCreateWithoutScoring_pointsInputSchema';

export const late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => late_eventsUpdateWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsUncheckedUpdateWithoutScoring_pointsInputSchema) ]),
  create: z.union([ z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema;
