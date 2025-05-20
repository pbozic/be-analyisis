import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsCreateWithoutBusinessesInputSchema } from './late_eventsCreateWithoutBusinessesInputSchema';
import { late_eventsUncheckedCreateWithoutBusinessesInputSchema } from './late_eventsUncheckedCreateWithoutBusinessesInputSchema';

export const late_eventsCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.late_eventsCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export default late_eventsCreateOrConnectWithoutBusinessesInputSchema;
