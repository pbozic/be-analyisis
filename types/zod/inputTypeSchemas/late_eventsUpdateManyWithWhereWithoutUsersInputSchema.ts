import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';
import { late_eventsUpdateManyMutationInputSchema } from './late_eventsUpdateManyMutationInputSchema';
import { late_eventsUncheckedUpdateManyWithoutUsersInputSchema } from './late_eventsUncheckedUpdateManyWithoutUsersInputSchema';

export const late_eventsUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => late_eventsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => late_eventsUpdateManyMutationInputSchema),z.lazy(() => late_eventsUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export default late_eventsUpdateManyWithWhereWithoutUsersInputSchema;
