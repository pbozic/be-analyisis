import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';
import { late_eventsUpdateManyMutationInputSchema } from './late_eventsUpdateManyMutationInputSchema';
import { late_eventsUncheckedUpdateManyWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedUpdateManyWithoutTaxi_ordersInputSchema';

export const late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsUpdateManyWithWhereWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => late_eventsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => late_eventsUpdateManyMutationInputSchema),z.lazy(() => late_eventsUncheckedUpdateManyWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default late_eventsUpdateManyWithWhereWithoutTaxi_ordersInputSchema;
