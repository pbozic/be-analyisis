import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutBusinessesInputSchema } from './late_eventsCreateWithoutBusinessesInputSchema';
import { late_eventsUncheckedCreateWithoutBusinessesInputSchema } from './late_eventsUncheckedCreateWithoutBusinessesInputSchema';
import { late_eventsCreateOrConnectWithoutBusinessesInputSchema } from './late_eventsCreateOrConnectWithoutBusinessesInputSchema';
import { late_eventsCreateManyBusinessesInputEnvelopeSchema } from './late_eventsCreateManyBusinessesInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';

export const late_eventsCreateNestedManyWithoutBusinessesInputSchema: z.ZodType<Prisma.late_eventsCreateNestedManyWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema),z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema).array(),z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => late_eventsCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => late_eventsCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => late_eventsCreateManyBusinessesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => late_eventsWhereUniqueInputSchema),z.lazy(() => late_eventsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default late_eventsCreateNestedManyWithoutBusinessesInputSchema;
