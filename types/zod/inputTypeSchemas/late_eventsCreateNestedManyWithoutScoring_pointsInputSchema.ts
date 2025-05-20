import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutScoring_pointsInputSchema } from './late_eventsCreateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedCreateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedCreateWithoutScoring_pointsInputSchema';
import { late_eventsCreateOrConnectWithoutScoring_pointsInputSchema } from './late_eventsCreateOrConnectWithoutScoring_pointsInputSchema';
import { late_eventsCreateManyScoring_pointsInputEnvelopeSchema } from './late_eventsCreateManyScoring_pointsInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';

export const late_eventsCreateNestedManyWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsCreateNestedManyWithoutScoring_pointsInput> = z.object({
  create: z.union([ z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema).array(),z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => late_eventsCreateOrConnectWithoutScoring_pointsInputSchema),z.lazy(() => late_eventsCreateOrConnectWithoutScoring_pointsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => late_eventsCreateManyScoring_pointsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default late_eventsCreateNestedManyWithoutScoring_pointsInputSchema;
