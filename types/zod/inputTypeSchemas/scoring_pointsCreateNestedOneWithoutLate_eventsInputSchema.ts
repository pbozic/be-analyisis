import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutLate_eventsInputSchema } from './scoring_pointsCreateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema';
import { scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema } from './scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema: z.ZodType<Prisma.scoring_pointsCreateNestedOneWithoutLate_eventsInput> = z.object({
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema).optional(),
  connect: z.lazy(() => scoring_pointsWhereUniqueInputSchema).optional()
}).strict();

export default scoring_pointsCreateNestedOneWithoutLate_eventsInputSchema;
