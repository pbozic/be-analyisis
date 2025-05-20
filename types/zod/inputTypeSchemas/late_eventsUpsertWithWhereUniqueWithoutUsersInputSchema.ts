import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutUsersInputSchema } from './late_eventsUpdateWithoutUsersInputSchema';
import { late_eventsUncheckedUpdateWithoutUsersInputSchema } from './late_eventsUncheckedUpdateWithoutUsersInputSchema';
import { late_eventsCreateWithoutUsersInputSchema } from './late_eventsCreateWithoutUsersInputSchema';
import { late_eventsUncheckedCreateWithoutUsersInputSchema } from './late_eventsUncheckedCreateWithoutUsersInputSchema';

export const late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => late_eventsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => late_eventsUpdateWithoutUsersInputSchema),z.lazy(() => late_eventsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => late_eventsCreateWithoutUsersInputSchema),z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema;
