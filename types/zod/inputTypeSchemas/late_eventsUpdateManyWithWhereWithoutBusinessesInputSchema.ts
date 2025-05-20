import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';
import { late_eventsUpdateManyMutationInputSchema } from './late_eventsUpdateManyMutationInputSchema';
import { late_eventsUncheckedUpdateManyWithoutBusinessesInputSchema } from './late_eventsUncheckedUpdateManyWithoutBusinessesInputSchema';

export const late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.late_eventsUpdateManyWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => late_eventsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => late_eventsUpdateManyMutationInputSchema),z.lazy(() => late_eventsUncheckedUpdateManyWithoutBusinessesInputSchema) ]),
}).strict();

export default late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema;
